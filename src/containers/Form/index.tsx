import { MainContainer, SaveButton, Title } from '../../styles/index'
import { SearchInput } from '../../styles/index'
import { FormContainer, OptionsContainer } from './styles'

const Form = () => (
  <>
    <MainContainer>
      <Title>New task</Title>
      <FormContainer>
        <SearchInput placeholder="Task title" type="text" />
        <SearchInput placeholder="Task description" as="textarea" />
        <OptionsContainer>
          <p>Priority:</p>
          <input name="priority" type="radio" id="urgent" />{' '}
          <label htmlFor="urgent">Urgent</label>
          <input name="priority" type="radio" id="urgent" />{' '}
          <label htmlFor="urgent">Urgent</label>
          <input name="priority" type="radio" id="urgent" />{' '}
          <label htmlFor="urgent">Urgent</label>
        </OptionsContainer>
        <SaveButton type="submit">Save</SaveButton>
      </FormContainer>
    </MainContainer>
  </>
)
export default Form
