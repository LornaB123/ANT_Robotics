import { useState, useEffect } from 'react'
import img from '../images/gallery.png'

function Gallery(props) {
    const { pictures } = props
    const [photo, setPhoto] = useState(null)
    const [order,setOrder] = useState('first')

    useEffect(() => {
        setPhoto(pictures[0])
    },[pictures])

    function handlePrev() {
        const index = pictures.indexOf(photo)-1;
        !index ? setOrder('first') : setOrder('mid');
        setPhoto(pictures[index])
    }

    function handleNext() {
        const index = pictures.indexOf(photo)+1;
        index === pictures.length-1 ? setOrder('last') : setOrder('mid')
        setPhoto(pictures[index])
    }

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div>
                <img src={photo?.link} alt={photo?.name}/>
                <button 
                    className="arrow arrow_bg-white"
                    onClick={handlePrev}
                    disabled={order === 'first'}
                    />
                <button  
                    className="arrow arrow_bg-white gallery__btn-next" 
                    onClick={handleNext}
                    disabled={order === 'last'}
                    />
            </div>
            <p>{photo?.name}</p>
        </div>
    )
}

export default Gallery