import {DotLoader} from "react-spinners";

export default function Spinner({fullWidth}) {
    if(fullWidth){
        return (
            <div className="w-full flex justify-center">
                <DotLoader color={'#ddd'} speedMultiplier={2} />
            </div>
        )
    }
    return (
        <DotLoader color={'#ddd'} speedMultiplier={2} />
    )
}