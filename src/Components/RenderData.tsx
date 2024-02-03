// @ts-ignore
function RenderData({data}) {
    const ImagPath = 'https://image.tmdb.org/t/p/w500'
    return (
        <div className="container content-center justify-center items-center flex flex-wrap ">
            {
                data.map((item: { id: number | null | undefined; image: string; title: string | undefined; }) => {
                    return(
                        <div className="bg-cyan-300 p-4 shadow-2xl shadow-pink  " key={item.id}>
                            <img className="scale-90 rotate-2 border-b-2  4xl  hover:hue-rotate-180  "  src={ImagPath+item.backdrop_path} alt={item.title} />
                        <h5 className="flex justify-center">{item.title}</h5>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RenderData;