import Link from 'next/link'

interface Props {
    Link: string;
    Title: string;
    Description?: string;
    ImageSize?: string;
    ImageLink?: string;
}

const Box = (props: Props) => {
    return (
        <article className="tile is-child box">
            <Link href={props.Link}>
                <a>
                    <p className="title">{props.Title}</p>
                    <p className="content">{props.Description}</p>
                    <figure className={`image ${props.ImageSize}`}>
                        <img src={props.ImageLink} />
                    </figure>
                </a>
            </Link>
        </article>
    )
}

export default Box