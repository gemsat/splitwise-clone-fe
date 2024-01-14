import {useCountStore} from '../store/store';

export const SecondComponent = () => {
    const count = useCountStore((state) => state.count);
    const increaseCount = useCountStore((state)=>state.increaseCount);

    return(
    <>
        <button onClick={increaseCount}>
          SecondComponent count is {count}
        </button>
    </>
    );
    
};