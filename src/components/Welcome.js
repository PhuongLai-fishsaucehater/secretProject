import image from '../img/cake.png'

export function Home() {
    return (
        <div className='welcome'>
            <a href="/Menu"><img className='welcomeImg' src={image}></img></a>
            <p className='cake'>Hé lô bấm vô tui điiii!</p>
        </div>
    );
}