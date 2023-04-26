import { useState, useRef, useEffect } from 'react';
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name input is valid ')
  //   }

  // }, [enteredNameIsValid])


  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)


    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true)

    }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)

    }

  }

  const formsubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true)

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false)
      return;
    }
    setEnteredNameIsValid(true);
    // console.log(enteredName)
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)
    setEnteredName('');
  }

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control '

  return (
    <form onSubmit={formsubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} value={enteredName} type='text' id='name' onBlur={nameInputBlurHandler} onChange={nameInputChangeHandler} />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
