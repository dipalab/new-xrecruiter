import Reaction from '../Reaction'

interface ICommentCard {
  comment: {
    author: {
      name: string
      ava: string
    }
    body: string
    like: number
    rocket: number
    created_at: string
  }
}

const CommentCard = ({ comment }: ICommentCard) => {
  return (
    <>
      <div className="py-2.5 md:py-4 xl:py-5 px-3.5 md:px-5 xl:px-6">
        {/* author */}
        <div className="flex space-x-2 xl:space-x-3">
          <div className="w-6 md:w-8 xl:w-10 h-6 md:h-8 xl:h-10">
            <img src={comment.author.ava} alt="" className="w-full h-full" />
          </div>
          <div>
            <p className="font-cera-pro-medium text-[8px] leading-[11px] md:text-[11.5px] md:leading-4 xl:text-sm xl:leading-5 text-neutral-100">{comment.author.name}</p>
            <p className="font-cera-pro-regular text-[7px] leading-[9px] md:text-[10px] md:leading-[13px] xl:text-xs xl:leading-4 text-neutral-60 mt-0.5">{comment.created_at}</p>
          </div>
        </div>

        {/* body */}
        <div className="my-3">
          <p className="text-[9.5px] leading-[13px] md:text-[13px] md:leading-5 xl:text-base xl:leading-6 font-cera-pro-regular text-neutral-100 pr-1">{comment.body}</p>
        </div>

        {/* reaction */}
        <Reaction likeCount={comment.like} rocketCount={comment.rocket} />
      </div>
    </>
  )
}

export default CommentCard
