import Input from "./Input.jsx";
import {isEmail,isNotEmpty,hasMinLength} from '../util/validation.js'
import {useInput} from "../hooks/useInput.js";

export default function Login() {
    let {
        value:emailValue,
        handleInputChange:handleEmailChange,
        handleBlur:handleEmailBlur,
        hasError:hasEmailError,
        setEnteredValue:setEmailValue
    }=useInput(
        '',
        (value)=>{
            return isEmail(value)&&isNotEmpty(value)
        }
    )
    let {
        value:passwordValue,
        handleBlur:handlePasswordBlur,
        handleInputChange:handlePasswordChange,
        hasError:hasPasswordError,
        setEnteredValue:setPasswordValue
    }=useInput('',(value)=>hasMinLength(value,6))


    function handleSubmit(event) {
        event.preventDefault();
        console.log(hasPasswordError)
        console.log(hasEmailError)
        if(hasPasswordError || hasEmailError){
            return;
        }
        console.log('电子邮箱:'+emailValue)
        console.log('密码:'+passwordValue)
    }
    function  handleReset(event) {
        event.preventDefault()
        console.log('reset')
        setEmailValue(
            ''
        )
        setPasswordValue(
            ''
        )




    }
    return (
        <form onSubmit={handleSubmit} onReset={handleReset}>
            <h2>Login</h2>
            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    value={emailValue}
                    onChange={handleEmailChange}
                    error={hasEmailError&&<p>Please enter a vaild email address</p>}
                >
                </Input>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    label="Password"
                    onBlur={handlePasswordBlur}
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    error={hasPasswordError&&<p>Password must be at least 6 characters long</p>}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat" type="reset">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
