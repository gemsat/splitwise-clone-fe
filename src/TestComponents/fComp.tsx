import {useCountStore} from '../store/store';

export const FirstComponent = () => {
    const count = useCountStore((state) => state.count);
    const increaseCount = useCountStore((state)=>state.increaseCount);

    return(
    <>
        <button onClick={increaseCount}>
          FirstComponent count is {count}
        </button>
    </>
    );
    
};