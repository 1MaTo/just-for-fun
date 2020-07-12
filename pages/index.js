import css from "../styles/index.module.scss"
import { useEffect } from "react"

export default function HomePage() {

    useEffect(() => {
        var audio = new Audio("/sparkle.mp3")
        audio.volume = 0.1
        audio.play();
    },[])

    return <div className={css.background}>
        <div className={css.backgroundImage}>
            <div className={css.text}>Test</div>
        </div>
    </div>

}