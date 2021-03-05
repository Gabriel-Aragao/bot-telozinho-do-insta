import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Bot Telozinho do Insta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img
          src="/avatar-big.png"
          alt="Filipe Deschamps Pixel Art"
          className="avatar"
        />
        <h1 className="title">
          Bem vindo a base do
          <br/>
          <a href="https://instagram.com/">Telózinho do Insta</a>
        </h1>

        <p className="description">
          Telózinho é o bot que facilita sua vida na hora de compartilhar 
          com os amigos aquela notícia delicinha que você viu na  
          <a href="https://filipedeschamps.com.br/newsletter"> Newsletter do Filipe Deschamps </a> 
          que é o Michel Teló original. As notícias do dia saem em forma de posts no  
          <a href="https://instagram.com/"> Instagram do Telózinho</a> dai é só correr pro abraço,
          você compartilha a notícia com aquele seu amigo desavisado e de quebra ajuda 
          a divulgar essa Newsletter super delicinha.
        </p>

        <div className="grid">

          <a 
            href="https://filipedeschamps.com.br/newsletter" 
            className="card"
            target="_blank"
          >
            <h3>Deschamps Newsletter &rarr;</h3>
            <p>Se cadastra agora na Newsletter pra não perder nenhuma notícia.</p>
          </a>

          <a
            href="https://instagram.com/"
            className="card"
            target="_blank"
          >
            <h3>Instagram do Telózinho &rarr;</h3>
            <p>Aqui você pode compartilhar as notícias que você mais curtiu.</p>
          </a>

          <a 
            href="https://github.com/Gabriel-Aragao/bot-telozinho-do-insta" 
            className="card"
            target="_blank"
          >
            <h3>GitHub &rarr;</h3>
            <p>Dá aquela conferida no GitHub do projeto.</p>
          </a>

          <a
            href="https://www.youtube.com/watch?v=EW7m2WIvFgQ&list=PLMdYygf53DP7FJzPslLnmqp0QylyFfA8a"
            className="card"
            target="_blank"
          >
            <h3>Crie o seu Telózinho &rarr;</h3>
            <p>
              A playlist que me ensinou como colocar o Telózinho no ar. 
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer>

      <style jsx>{`

        .container {
          min-height: 80vh;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-flex-direction: column;
          -ms-flex-direction: column;
          flex-direction: column;
          -webkit-box-pack: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-items: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI, Helvetica Neue,Helvetica,Arial,sans-serif;
          -webkit-font-smoothing: antialiased;
          color: #333333;
          text-align: center;
      }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .avatar{
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 2rem 0;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3.5rem;
          text-align: center;
          -webkit-letter-spacing: -0.02em;
          -moz-letter-spacing: -0.02em;
          -ms-letter-spacing: -0.02em;
          letter-spacing: -0.02em;
        }

        .description {
          max-width: 700px;
          line-height: 1.1;
          font-size: 1.2rem;
          text-align: justify;
          
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 0.5rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }

        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
