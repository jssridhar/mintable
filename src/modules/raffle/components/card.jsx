import { useEffect, useState } from "react";



function Card({ ticket }) {
    const { background, count, label } = ticket;
    const [img, setImg] = useState(null);
    useEffect(() => {
        if (background) {
            loadImage(background);
        }
    }, [background]);
    const loadImage = imageName => {
        import(`../../../assets/images/${imageName}`).then(image => {
            setImg(image.default);
        });
    };
    return (
        <div className='relative'>
            <img className={count === 0 ? 'opacity-10' : ''} src={img} alt={`ticket_${label}`} />
            <div className='h-8 w-8 absolute -top-3 -right-4 flex items-center justify-center rounded-full bg-purple-600 text-white text-center'>
                {count}
            </div>
        </div>
    );
}

export default Card;