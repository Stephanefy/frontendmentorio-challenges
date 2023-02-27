import { FC } from 'react';

interface Props {
    title?: string;
    description?: string;
    backgroundColor?: string;
    textColor?: string;
}

const Card: FC<Props> = (props): JSX.Element => {
  return (
    <div className={`${props.backgroundColor} p-3 rounded-lg mt-3`}>
        <button>
                <h3 className='text-white'>{props.title}</h3>
        </button>
    </div>
)
};

export default Card;