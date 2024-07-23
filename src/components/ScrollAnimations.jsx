import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollAnimations = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(scrollYProgress, [0, 1], ["#f00", "#0f0"]);

  return (
    <div>
      <motion.div
        className="sticky top-0 bg-blue-400 w-full h-10 flex items-center justify-center"
        style={{
          transformOrigin: "left",
          scaleX: scaleX,
          background,
        }}
      />
      <div className="p-8 text-2xl flex flex-col gap-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis
          veritatis qui. Beatae, in quibusdam pariatur laudantium autem illum
          reprehenderit placeat aliquam? In, corporis ipsum eos vel totam minus
          quidem, recusandae iure praesentium alias illo accusamus dicta cum eum
          quam distinctio sapiente voluptatem corrupti veniam porro dolore
          placeat! Accusamus rem veniam aperiam possimus perferendis, tempora
          neque, architecto natus minima fugit assumenda, dignissimos quasi
          quisquam. Perspiciatis ab nemo quaerat error. Aut incidunt facere
          cumque exercitationem. Laudantium officia consequuntur obcaecati sequi
          magni nemo sit adipisci ratione, distinctio ipsa a mollitia, ducimus
          ut cumque necessitatibus quis rerum neque numquam error repudiandae
          pariatur incidunt!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis
          veritatis qui. Beatae, in quibusdam pariatur laudantium autem illum
          reprehenderit placeat aliquam? In, corporis ipsum eos vel totam minus
          quidem, recusandae iure praesentium alias illo accusamus dicta cum eum
          quam distinctio sapiente voluptatem corrupti veniam porro dolore
          placeat! Accusamus rem veniam aperiam possimus perferendis, tempora
          neque, architecto natus minima fugit assumenda, dignissimos quasi
          quisquam. Perspiciatis ab nemo quaerat error. Aut incidunt facere
          cumque exercitationem. Laudantium officia consequuntur obcaecati sequi
          magni nemo sit adipisci ratione, distinctio ipsa a mollitia, ducimus
          ut cumque necessitatibus quis rerum neque numquam error repudiandae
          pariatur incidunt!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis
          veritatis qui. Beatae, in quibusdam pariatur laudantium autem illum
          reprehenderit placeat aliquam? In, corporis ipsum eos vel totam minus
          quidem, recusandae iure praesentium alias illo accusamus dicta cum eum
          quam distinctio sapiente voluptatem corrupti veniam porro dolore
          placeat! Accusamus rem veniam aperiam possimus perferendis, tempora
          neque, architecto natus minima fugit assumenda, dignissimos quasi
          quisquam. Perspiciatis ab nemo quaerat error. Aut incidunt facere
          cumque exercitationem. Laudantium officia consequuntur obcaecati sequi
          magni nemo sit adipisci ratione, distinctio ipsa a mollitia, ducimus
          ut cumque necessitatibus quis rerum neque numquam error repudiandae
          pariatur incidunt!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis
          veritatis qui. Beatae, in quibusdam pariatur laudantium autem illum
          reprehenderit placeat aliquam? In, corporis ipsum eos vel totam minus
          quidem, recusandae iure praesentium alias illo accusamus dicta cum eum
          quam distinctio sapiente voluptatem corrupti veniam porro dolore
          placeat! Accusamus rem veniam aperiam possimus perferendis, tempora
          neque, architecto natus minima fugit assumenda, dignissimos quasi
          quisquam. Perspiciatis ab nemo quaerat error. Aut incidunt facere
          cumque exercitationem. Laudantium officia consequuntur obcaecati sequi
          magni nemo sit adipisci ratione, distinctio ipsa a mollitia, ducimus
          ut cumque necessitatibus quis rerum neque numquam error repudiandae
          pariatur incidunt!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facilis
          veritatis qui. Beatae, in quibusdam pariatur laudantium autem illum
          reprehenderit placeat aliquam? In, corporis ipsum eos vel totam minus
          quidem, recusandae iure praesentium alias illo accusamus dicta cum eum
          quam distinctio sapiente voluptatem corrupti veniam porro dolore
          placeat! Accusamus rem veniam aperiam possimus perferendis, tempora
          neque, architecto natus minima fugit assumenda, dignissimos quasi
          quisquam. Perspiciatis ab nemo quaerat error. Aut incidunt facere
          cumque exercitationem. Laudantium officia consequuntur obcaecati sequi
          magni nemo sit adipisci ratione, distinctio ipsa a mollitia, ducimus
          ut cumque necessitatibus quis rerum neque numquam error repudiandae
          pariatur incidunt!
        </p>
      </div>
    </div>
  );
};

export default ScrollAnimations;
