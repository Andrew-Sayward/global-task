import NewsletterLayout from "@/layouts/newsletter-layout";

const Newsletter = () => {
  return (
    <NewsletterLayout> 
      <div className="container">
        <h1 className="mt-4 font-bold">Newsletter</h1>
        <article className="newsletter-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet lobortis arcu, sed pellentesque arcu. Maecenas fringilla, neque a porttitor sagittis, sem nunc maximus libero, nec bibendum quam turpis sit amet mauris. Vivamus dignissim molestie massa, et rutrum sem dictum sed. Aliquam et odio a ipsum lobortis fringilla. Maecenas nec blandit augue. Suspendisse potenti. Integer vitae laoreet ligula. Etiam nec aliquam lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque elit metus, egestas ac lobortis nec, vulputate eget odio. Integer eget molestie justo, eget fermentum massa. Aliquam non quam eleifend, rutrum arcu congue, vehicula tellus. Phasellus condimentum odio id eros auctor dictum.</p>

        <p>Donec turpis orci, convallis non eros a, molestie mollis est. Donec tempus tincidunt justo non elementum. Sed sagittis lacus at dignissim venenatis. Donec enim urna, facilisis at ipsum at, auctor volutpat felis. In ligula justo, interdum eget lorem viverra, tempor elementum nulla. Integer blandit maximus congue. Nunc faucibus imperdiet nunc vitae vestibulum.</p>

        <p>Donec pulvinar auctor purus, sed vehicula neque pulvinar non. Pellentesque et blandit nulla. Maecenas tristique enim ac dolor viverra, quis luctus lacus bibendum. Donec at mi porta libero venenatis fringilla id ac eros. Suspendisse rhoncus imperdiet nisi, sit amet tristique mi aliquet quis. Sed ut nisl id erat viverra ullamcorper. Praesent id felis tellus. Nam elementum tincidunt pretium. Nullam lectus purus, aliquet in nibh a, hendrerit auctor risus. Sed eget metus posuere, tempor eros at, commodo massa. Nunc in nunc a ligula mattis varius nec non tellus. Donec arcu lectus, lobortis eu tortor blandit, euismod varius diam. Donec sem mauris, viverra sit amet lacinia sit amet, tristique vel nisl.</p>

        <p>Sed faucibus laoreet risus a pretium. Fusce tempor sit amet erat a maximus. Etiam eu mollis turpis, a bibendum sapien. In quis tincidunt nunc, sed rhoncus odio. Cras pulvinar condimentum tellus, at vestibulum diam eleifend ut. Sed eu mollis libero. Aenean id pellentesque leo, at eleifend sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et placerat eros, quis eleifend dolor.</p>

        <p>Aenean sed accumsan lectus. Nunc nibh sapien, tristique et nunc eu, semper finibus mauris. In accumsan velit ut nisl imperdiet facilisis. Nunc ullamcorper orci at diam mollis semper. Cras tincidunt, velit vel porta rhoncus, purus felis porta purus, at venenatis nulla lacus et massa. Donec dictum sed nulla ut elementum. Nam non malesuada turpis. Fusce aliquam ipsum sit amet ligula porta tristique. Fusce non pretium neque. Nullam diam nisl, auctor eu sollicitudin porttitor, rhoncus vel nisi. Vivamus vitae ullamcorper magna. Duis pharetra eleifend metus, at scelerisque augue efficitur eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        </article>
        <div className="newsletter-signup">
          <p className="mt-4">Subscribe to our newsletter to get the latest trends and offers.</p>
          <form className="flex gap-4 mt-2">
            <input type="text" placeholder="Email Address" className="p-2" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </NewsletterLayout>
  )
}

export default Newsletter; 
