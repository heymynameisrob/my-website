import { NextResponse } from "next/server";
import querystring from "querystring";

export const dynamic = "force-dynamic";

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const token_endpoint = `https://accounts.spotify.com/api/token`;
const now_playing_endpoint = `https://api.spotify.com/v1/me/player/currently-playing`;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export async function GET() {
  const fetchToken = async () => {
    if (!client_id) return;

    const response = await fetch(token_endpoint, {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify({
        grant_type: "refresh_token",
        refresh_token,
        client_id,
        client_secret,
      }),
    });

    if (!response.ok) {
      return { data: null, error: response.statusText };
    }

    return response.json();
  };

  const { access_token } = await fetchToken();

  const response = await fetch(now_playing_endpoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (response.status === 204) {
    return NextResponse.json("Not Playing", { status: 200 });
  }

  if (response.status === 401) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const song = await response.json();

  const albumImage = song.item.album.images[0].url;
  const album = song.item.album.name;
  const artist = song.item.artists
    .map((artist: { name: string }) => artist.name)
    .join(", ");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  const data = {
    albumImage,
    album,
    artist,
    isPlaying,
    songUrl,
    title,
  };

  return NextResponse.json(data, { status: 200 });
}
