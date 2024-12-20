import React from 'react';

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust height as needed
      }}
      className="flex flex-col justify-center h-full"
    >
      <div className="container mx-auto h-96 gap-4 p-5">
  <h1 className="text-white text-8xl my-5">This is H1</h1>
  <p className="text-2xl text-white p-3">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, aut!
    Aspernatur, laboriosam quae similique sapiente doloremque cupiditate
    repellat ad enim pariatur ex voluptas itaque reprehenderit illum possimus
    dolores asperiores delectus quis mollitia debitis quia eos? Veritatis ipsam
    assumenda dolorum voluptate! Illo explicabo doloribus sunt delectus
    tenetur corporis earum officiis minima.
  </p>
  <button className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring">Know more</button>
</div>

    </div>
  );
};

export default Hero;
