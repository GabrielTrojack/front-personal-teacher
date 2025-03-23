import React from "react";
import "./question-txt.css";

const QuestionTXT = () => {
    return(
        <div>
        <section className='questao'>
        <h2>Questão X</h2>
        <blockquote>
          <p>
            “Na linguagem, podemos nos ver da forma mais verdadeira: nossas 
            crenças, nossos valores, nosso lugar no mundo”, afirmou o doutor 
            em linguística e professor da Ufam em seu livro Amazonês: expressões 
            e termos usados no Amazonas. Portanto, o amazonense, com todas as 
            suas “cunhantãs” e “curumins”, acaba por encontrar um lugar no mundo 
            e formar uma unidade linguística, informalmente denominada de português 
            “caboco”, que muito se diferencia do português “mineiro”, “gaúcho”, 
            “carioca” e de tantos outros espalhados pelo Brasil. O livro, que conta 
            com cerca de 1.100 expressões e termos típicos do falar amazonense, 
            levou dez anos para ser construído. Para o autor, o principal objetivo 
            da obra é registrar a linguagem.
            Um designer amazonense também acha o amazonês “xibata”, tanto é 
            que criou uma série de camisetas estampadas com o nome de Caboquês 
            Ilustrado, que mistura o bom humor com as expressões típicas da região. 
            A coleção conta com sete modelos já lançados, entre eles: Leseira Baré, 
            Xibata no Balde e Até o Tucupi, e 43 ainda na fila de espera. Para o criador, 
            as camisas têm como objetivo “resgatar o orgulho do povo manauara, do povo do Norte”.
          </p>
        </blockquote>

        <div className='alternativas'>
          <div className='alternativa'>
            <strong>A)</strong> As notícias falsas são sempre criadas com intenções 
            humorísticas ou literárias.
          </div>
          <div className='alternativa'>
            <strong>B)</strong> A disseminação de notícias falsas pode prejudicar 
            a imagem de indivíduos ou grupos.
          </div>
          <div className='alternativa'>
            <strong>C)</strong> As redes sociais não têm influência na propagação 
            de notícias falsas.
          </div>
          <div className='alternativa'>
            <strong>D)</strong> Notícias falsas são inofensivas e não afetam 
            a sociedade.
          </div>
          <div className='alternativa'>
            <strong>E)</strong> Apenas políticos são alvo de notícias falsas 
            nas redes sociais.
          </div>
        </div>
      </section>
        </div>
    );
}

export default QuestionTXT;