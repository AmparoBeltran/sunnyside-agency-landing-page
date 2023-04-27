import { TestimonialsStyled } from "./styles/Testimonials.styled";
import data from "../data.json"

export default function Testimonials() {
    return (
        <TestimonialsStyled>

            <h1>client testimonials</h1>
            <div className="testimonial-wrapper">
                {data.map((item) => (
                    <article key={item.author}>
                        <img src={`${item.avatar}`} alt="avatar" />
                        <p>{item.copy}</p>
                        <div className="author">
                            <h6>{item.author}</h6>
                            <small>{item.role}</small>
                        </div>
                    </article>
                ))}
            </div>
        </TestimonialsStyled>
    )
}