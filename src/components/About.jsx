import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src="https://images.unsplash.com/photo-1732812998149-edf44224e239?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="mx-auto h-50 p-5 rounded-sm"
        />
      </div>
      <div>
        <h1 className="text-6xl mx-10 my-12">About me</h1>
        <p className="container mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta sed unde velit eveniet asperiores, perferendis dolor voluptatum sequi explicabo quia officia obcaecati quibusdam deleniti soluta hic earum porro blanditiis eaque? Odio quis fuga doloribus aliquam. Cum deserunt commodi accusamus minima quisquam explicabo. Voluptates at maiores accusamus qui, saepe perspiciatis veritatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa expedita, magnam fugit nulla officiis quaerat quidem hic at dolore, et impedit deserunt. Voluptate incidunt atque, voluptatem laudantium ut neque!</p>
        <button className="bg-blue-700 text-white mx-auto p-5 my-3 rounded hover:bg-blue-500">click here</button>
      </div>
    </div>
  );
};

export default About;
