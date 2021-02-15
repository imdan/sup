import React, { useContext } from "react"
import logStyles from "../styles/log.module.css"
import ModeContext from "../context/ModeContext"

const Post = () => {
  const { dark } = useContext(ModeContext)

  const data = {
    title: "We live in a twilight world.",
    author: "Dan",
    date: new Date().toDateString(),
    thumb: "../sup.svg",
    thumb_desc: "floating sup logo",
    desc:
      "And there are no friends at dusk. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias incidunt sit nobis tempora sequi inventore nostrum id vel eaque. Qui.",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit blanditiis rerum, non, quidem neque maxime sint eum, consequatur nihil quae facere nostrum? Iste quas eius voluptas similique porro eligendi, atque cupiditate, error consequatur quibusdam voluptatum necessitatibus, eum hic a sed nostrum mollitia aspernatur sint ab doloribus alias explicabo consequuntur. Esse, deserunt cupiditate. Nisi praesentium vel aliquam quas animi neque adipisci similique debitis reiciendis doloremque nulla repellendus vero facere labore odio error, quo saepe quidem iste nobis repudiandae ipsum earum laudantium. Natus, sit dolorem officiis doloremque sed a autem, consequatur est quidem eum in fugiat eius illum sunt, unde maiores sequi!",
  }

  return (
    <div
      className={
        dark ? `${logStyles.post} ${logStyles.postDark}` : logStyles.post
      }
    >
      {/* <img
        src={data.thumb}
        alt={data.thumb_desc}
        style={{ position: "relative", left: "0" }}
      /> */}

      <h1 className={logStyles.postTitle}>{data.title}</h1>
      <h4 className={logStyles.postMark}>
        {data.author} - {data.date}
      </h4>
      <p className={logStyles.postDesc}>{data.desc}</p>
    </div>
  )
}

export default Post
