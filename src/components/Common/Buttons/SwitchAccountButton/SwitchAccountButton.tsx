import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
// import FormHelperText from '@mui/material/FormHelperText'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import AddIconSvg from '../../Icons/AddIconSvg'
interface SwitchAccountButtonProps {
  userNames: string[]
}
export const SwitchAccountButton = ({
  userNames
}: SwitchAccountButtonProps): JSX.Element => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false)
  // const [helperText, setHelperText] = React.useState('Choose wisely')

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue((event.target as HTMLInputElement).value)
    // setHelperText(' ')
    setError(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel id="demo-error-radios">Choose Your Account ...</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          {userNames.map((name: string, index) => {
            return (
              <div key={index}>
                <FormControlLabel
                  value={name}
                  control={<Radio />}
                  label={name}
                />
              </div>
            )
          })}

          <FormControlLabel
            value="worst"
            control={<Radio />}
            label="The worst."
          />
        </RadioGroup>

        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          <AddIconSvg /> Switch New Account
        </Button>
      </FormControl>
    </form>
  )
}
