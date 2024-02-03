import { Key } from "react";

// @ts-ignore
function RenderData({data}) {
    const ImagPath = 'https://image.tmdb.org/t/p/w500'
    return (
        <div>
            {
                data.map((item: { id: Key | null | undefined; image: string; title: string | undefined; }) => {
                    return(
                        <div key={item.id}>
                            <img src={ImagPath+item.backdrop_path} alt={item.title} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default RenderData;