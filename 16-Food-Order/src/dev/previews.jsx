import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Input from "../component/UI/Input.jsx";
import Checkout from "../component/Checkout.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Input">
                <Input/>
            </ComponentPreview>
            <ComponentPreview path="/Checkout">
                <Checkout/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews