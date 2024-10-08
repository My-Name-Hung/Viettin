import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion"; // Import Framer Motion

function Section2() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsdata.io/api/1/latest?country=vi&category=top&apikey=pub_54537774947c144e503348a438976e301046f&language=vi"
      )
      .then((response) => {
        setArticles(response.data.results || response.data.articles); // Adjust to actual structure
      })
      .catch((error) => console.error(error));
  }, []);

  // Framer Motion settings for scroll animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Initial state: hidden and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }, // Smooth transition
    },
  };

  return (
    <div>
      <section className="relative">
        <div className="relative z-10 flex flex-col items-center justify-center md:p-[10vh_0] p-[10vh_0]">
          <span className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
            <center>Tin tức</center>
          </span>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} // Trigger animation only once when in view
                variants={cardVariants}
              >
                <Card
                  className="shadow-lg border-1 border-gray-300 border-solid transition-transform transform hover:scale-105"
                  isHoverable
                  isPressable
                  css={{
                    mw: "400px",
                    mb: "20px",
                    p: "1rem",
                    borderRadius: "12px",
                  }}
                >
                  <CardHeader>
                    <Link href={article.link || "#"} className="text-black">
                      <h3 className="text-lg font-semibold">
                        {article.title || ""}
                      </h3>
                    </Link>
                  </CardHeader>

                  <CardBody>
                    <p className="line-clamp-3 text-gray-700">
                      {article.description || "Chưa có mô tả"}
                    </p>
                  </CardBody>

                  <CardFooter>
                    <Link
                      href={article.link || "#"}
                      target="_blank"
                      className="text-blue-500"
                      css={{ textDecoration: "none", fontWeight: "bold" }}
                    >
                      {article.link ? "Xem thêm >" : "Link not available"}
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section2;
