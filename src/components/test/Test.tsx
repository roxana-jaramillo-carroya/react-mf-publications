import React, { useRef } from 'react'

const Test = () => {

    return (
        <>

            {/* <h1>Prueba WebComponents</h1>
      <cy-text class="cy-text-24 cy-text-center md:cy-text-left cy-text-CD-800 cy-font-medium">
        ¿Aun no sabes que vehículo quieres comprar?
      </cy-text>
      <cy-button type="primary" size="large" variant="" onClick={open}>
        <span className="cy-whitespace-nowrap cy-w-full">
          Publicar mi carro
        </span>
      </cy-button> */}
            <cy-text class="cy-text-16 sm:cy-text-24 lg:cy-text-26 cy-mb-16 md:cy-mb-24 lg:cy-mb-36 cy-text-center md:cy-text-left cy-text-H-800 cy-font-medium">
                Haz parte de la vitrina digital más ambiciosa del sector de la
                movilidad en Colombia.
              </cy-text>

            <cy-text class="cy-text-16 cy-text-center md:cy-text-left cy-text-R-400 cy-font-medium">
                ¿Quieres ver opciones de financiación de otros bancos para tu
                vehículo?
            </cy-text>
            <div className="cy-text-center cy-w-full md:cy-border-solid cy-border-CL-400 cy-border-0 cy-border-t">
                <img className="xl:cy-max-h-96 lg:cy-max-h-80 md:cy-max-h-64" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="" />

            </div>

            <div className="app-container">
                <h1 className="text-9xl">React App</h1>
                Webpack 5 boilerplate for react using babel, sass, with a hot dev server
                and an optimized production build.
            </div>

            <div className="cy-bg-white cy-mx-auto cy-max-w-sm cy-shadow-lg cy-rounded-lg cy-overflow-hidden">
                <div className="cy-sm:flex cy-sm:items-center cy-px-6 cy-py-4">
                    <img className="cy-block cy-h-16 cy-sm:h-24 cy-rounded-full cy-mx-auto cy-mb-4 cy-sm:mb-0 cy-sm:mr-4 cy-sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt="" />
                    <div className="cy-text-center cy-sm:text-left cy-sm:flex-grow">
                        <div className="cy-mb-4">
                            <p className="cy-text-xl cy-leading-tight">Adam Wathan</p>
                            <p className="cy-text-sm cy-leading-tight cy-text-grey-dark">Developer at NothingWorks Inc.</p>
                        </div>
                        <div>
                            <button className="cy-text-xs cy-font-semibold cy-rounded-full cy-px-4 cy-py-1 cy-leading-normal cy-bg-white cy-border cy-border-purple cy-text-purple cy-hover:bg-purple cy-hover:text-white">Message</button>
                        </div>
                    </div>
                </div>
            </div>;
        </>
    )
}

export default Test;

