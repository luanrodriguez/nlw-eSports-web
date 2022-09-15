interface GameBannerProps {
    banner: string,
    title: string,
    adsCount: number
}

export function GameBanner({banner, title, adsCount}: GameBannerProps) {
    return (
        <a href="" className='relative rounded-lg overflow-hidden'>
            <img src={banner}></img>
            <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 rigth-0'>
              <strong className='font-bold text-white block'>{title}</strong>
              <span className='text-sm text-zinc-300 block'>{adsCount} anúncio(s)</span>
            </div>
        </a>
    )
}