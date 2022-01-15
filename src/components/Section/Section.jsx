import React from 'react';

const Section = () => {
    
  return (
    <div className="w-full py-20 flex bg-gray-900">
      <div className="w-9/12 mx-auto flex">
        <div className="w-1/2 mx-auto py-28">
            <h1 className="text-5xl font-bold text-white w-11/12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="pt-8 text-gray-400 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
            veritatis recusandae quasi fuga atque dolorum ratione, nobis
            laudantium sit iusto, enim obcaecati libero. Deleniti reprehenderit
            commodi ex obcaecati nemo iste!
            </p>
        </div>
        <div className="w-1/2 flex itens-center">
          <div className="w-2/3 mx-auto py-20">
            <div className="w-full h-full">
                <img className="rounded-xl"src="/foto.png" alt="foto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
