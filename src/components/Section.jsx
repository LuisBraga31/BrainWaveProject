import SectionSvg from '../assets/svg/SectionSvg';

export default function Section( {
    classNames,
    id,
    crosses,
    crosseOffset,
    customPaddings,
    children
}) {
  return (
    <div id={id} className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''} ${classNames || ""}`}`}>
        {children}
        <div className="hidden absolute top-0 left-5 w-0 25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10"></div>
        <div className="hidden absolute top-0 right-5 w-0 25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10"></div>

        {crosses && (
            <>
                <div className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1
                    ${crosseOffset && crosseOffset} pointer-events-none lg:block xl:left-10 right-10`}/>

                <SectionSvg/>
                    
            </>
        )}
    </div>
  )
}
