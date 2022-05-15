import img1 from '../img/1F4004D8-3153-4DB4-8CBA-CBE74424FD10.jpg';
import img2 from '../img/IMG_0721.JPG'
import img3 from '../img/IMG_0425.jpg'
import img4 from '../img/IMG_0431.jpg'
import img5 from '../img/IMG_0564.jpg'
import img6 from '../img/IMG_0378.jpg' 
export function Menu() {
    let images = [img1, img2, img3, img4, img5, img6];
    let renderImages = images.map((img) => {
        return <img className='menuImg' src={img}></img>
    });
    return (
        <div id="Menu">
            {renderImages}
            <div className='letter'>
                <p className='text'>
                    Hé lô, hôm nay là sinh nhật của bé nè, anh hong ở bên cạnh bé được nên là anh sẽ
                    làm cái này cho bé. Vậy là gần một năm rồi đó hehe. Thì năm qua 2 đứa mình cố gắng rất nhiều rồi
                    nên là chờ anh về nha, sớm thoii. Tuổi mới anh chúc bé sinh nhật siêu vui vẻ, chúc bé xinh đẹp hơn mặc dù 
                    đã là người xinh đẹp nhất trên đời rùi. Anh hong biết là sau này tụi mình sẽ như thế nào nhưng mà anh biết là 
                    anh thương em siêu siêu nhiều luôn nên là anh sẽ không bao giờ ngưng cố gắng vì tụi mình đâu. Nên là chờ anh về nha,
                    anh sẽ dẫn bé đi ăn chơi siêu nhiều chỗ hay luônnn. Em là người luôn làm cho anh có cảm giác muốn cố gắng 
                    siêu siêu nhiều để tốt hơn nữa luôn. Chúc bé sinh nhật siêu siêu siêu vui vẻ. Anh thương em nhiều lắm, thơm em 100000000 cái. (xin lõi 
                    hình bé hơi bị kì hihi tại anh phải kéo ra.)
                </p>
            </div>
        </div>
    );
}