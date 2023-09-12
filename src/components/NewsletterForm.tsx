const NewsletterForm = () => (
  <form
    action="https://buttondown.email/api/emails/embed-subscribe/webgamedev"
    method="post"
    target="popupwindow"
    onSubmit={() => {
      window.open('https://buttondown.email/webgamedev', 'popupwindow')
    }}
    className="embeddable-buttondown-form"
  >
    <label htmlFor="bd-email">Enter your email</label>
    <input type="email" name="email" id="bd-email" />
    <input type="submit" value="Subscribe" />
  </form>
)

export default NewsletterForm
