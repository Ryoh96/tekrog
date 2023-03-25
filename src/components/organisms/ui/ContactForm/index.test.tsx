import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from '@/theme'

import ContactForm from '.'

jest.mock('../SendEmail', () => {
  return function mockSendEmail(props) {
    return <div data-testid="mock-send-email">MockSendEmail</div>
  }
})

describe('ContactForm', () => {
  const onCompleted = jest.fn()

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <ContactForm onCompleted={onCompleted} />
      </ThemeProvider>
    )
  })

  it('Should be disabled the submit button', () => {
    expect(screen.getByTestId('submit-button')).toBeDisabled()
  })

  it('Should be enabled the submit button', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(submitButton).toBeEnabled()
    ;(global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () => Promise.resolve({}),
      })
    )
    userEvent.click(submitButton)
    await waitFor(() => expect(global.fetch).toHaveBeenCalled())
    await waitFor(() => expect(onCompleted).toHaveBeenCalled())
    expect(screen.getByTestId('mock-send-email')).toBeInTheDocument()
  })

  it('Should show up the error message when failed fetch', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(submitButton).toBeEnabled()
    ;(global as any).fetch = jest.fn(() =>
      Promise.reject({
        json: () => Promise.reject({}),
      })
    )
    userEvent.click(submitButton)
    await waitFor(() => expect(global.fetch).toHaveBeenCalled())
    expect(await screen.findByText('エラーが発生しました')).toBeInTheDocument()
  })

  it('Should show up the error message when the status code of the fetch is not 200', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(submitButton).toBeEnabled()
    ;(global as any).fetch = jest.fn(() =>
      Promise.resolve({
        status: 401,
        json: () => Promise.resolve({}),
      })
    )
    userEvent.click(submitButton)
    await waitFor(() => expect(global.fetch).toHaveBeenCalled())
    expect(await screen.findByText('エラーが発生しました')).toBeInTheDocument()
  })

  it('Should be disabled the submit button again when the input is empty again', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(submitButton).toBeEnabled()

    userEvent.clear(inputName)
    await waitFor(() => expect(submitButton).toBeDisabled())
  })

  it('Should show up the error message when the name has more than 20 characters', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const invalidText = 'hogehogehogehogehogee'
    userEvent.type(inputName, invalidText)
    await waitFor(() => expect(inputName).toHaveValue(invalidText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(
      await screen.findByText('※最大文字数を超えています')
    ).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it('Should show up the error message when the e-mail address is in the wrong format', async () => {
    const submitButton = screen.getByTestId('submit-button')

    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputEmail = screen.getByTestId('input-email')
    const invalidAddress = 'invalid'
    userEvent.type(inputEmail, invalidAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(invalidAddress))
    expect(screen.getByTestId('submit-button')).toBeDisabled()

    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))

    expect(
      await screen.findByText('※メールアドレスの形式が正しくありません')
    ).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
  })

  it('Should get the error at name if you type a character once and then empty it', async () => {
    const inputName = screen.getByTestId('input-name')
    const validText = 'hoge'
    userEvent.type(inputName, validText)
    await waitFor(() => expect(inputName).toHaveValue(validText))
    userEvent.clear(inputName)
    expect(await screen.findByText('※入力してください')).toBeInTheDocument()
  })

  it('Should get the error at email if you type a character once and then empty it', async () => {
    const inputEmail = screen.getByTestId('input-email')
    const validAddress = 'example@example.com'
    userEvent.type(inputEmail, validAddress)
    await waitFor(() => expect(inputEmail).toHaveValue(validAddress))
    userEvent.clear(inputEmail)
    expect(await screen.findByText('※入力してください')).toBeInTheDocument()
  })

  it('Should get the error at message if you type a character once and then empty it', async () => {
    const inputMessage = screen.getByTestId('input-message')
    const validMessage = 'hoge'
    userEvent.type(inputMessage, validMessage)
    await waitFor(() => expect(inputMessage).toHaveValue(validMessage))
    userEvent.clear(inputMessage)
    expect(await screen.findByText('※入力してください')).toBeInTheDocument()
  })
})
