import { cn } from "@/lib/utils";

export const GridLine = ({orientation, align, offset, className}: {orientation: 'x' | 'y', align: 'left' | 'right' | 'top' | 'bottom', offset: number, className?: string}) => {
  
  if (align === 'bottom' || align === 'right') {
    offset = -offset
  }  
  

  return(
  <div 
  aria-hidden="true"
  className={cn(
    "hidden fixed border-primary border-dotted pointer-events-none md:block",  
    orientation === 'x' ? 'w-full h-[1px]' : "w-[1px] h-[calc(100vh_+_80px)]",  
    align === 'left' && 'top-0 left-0 border-l',
    align === 'right' && 'top-0 right-0 border-r',
    align === 'top' && 'top-0 border-t',
    align === 'bottom' && 'bottom-0 border-b',
    className
    )}
    style={{
      transform: orientation === 'x' ? 
      `translateY(${offset}px)` 
      : `translateX(${offset}px)`,
      zIndex: 10
    }}
    ></div>
  )
}