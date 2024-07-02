import NewsletterLayout from "@/layouts/newsletter-layout";

const Newsletter = () => {
  return (
    <NewsletterLayout> 
      <div className="container">
        <h1 className="mt-4">Newsletter Signup</h1>
        <p className="mt-4">Subscribe to our newsletter to get the latest trends and offers.</p>
        <form className="flex gap-4 mt-2">
          <input type="text" placeholder="Email Address" className="p-2" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </NewsletterLayout>
  )
}

export default Newsletter; 
