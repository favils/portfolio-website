import React, { useEffect, useRef } from "react";

const CustomCursor = ({ images = ["/star.png", "/star2.png", "/star3.png"], wrapperElement }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const imageElements = useRef([]);
  const cursor = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const element = wrapperElement || document.body;

    const preloadImages = (srcArray) => {
      return Promise.all(
        srcArray.map((src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              imageElements.current.push(img);
              resolve();
            };
            img.onerror = reject;
          });
        })
      );
    };

    const init = async () => {
      await preloadImages(images);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.style.position = wrapperElement ? "absolute" : "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.pointerEvents = "none";
      if (wrapperElement) {
        element.appendChild(canvas);
        canvas.width = element.clientWidth;
        canvas.height = element.clientHeight;
      } else {
        document.body.appendChild(canvas);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      bindEvents();
      loop();
    };

    const bindEvents = () => {
      element.addEventListener("mousemove", onMouseMove);
      element.addEventListener("touchmove", onTouchMove, { passive: true });
      element.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("resize", onWindowResize);
    };

    const onWindowResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        if (wrapperElement) {
          canvas.width = element.clientWidth;
          canvas.height = element.clientHeight;
        } else {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            randomImage()
          );
        }
      }
    };

    const onMouseMove = (e) => {
      const canvas = canvasRef.current;
      if (wrapperElement) {
        const boundingRect = element.getBoundingClientRect();
        cursor.current.x = e.clientX - boundingRect.left;
        cursor.current.y = e.clientY - boundingRect.top;
      } else {
        cursor.current.x = e.clientX;
        cursor.current.y = e.clientY;
      }

      if (Math.random() < 0.3) {
        addParticle(cursor.current.x, cursor.current.y, randomImage());
      }
    };

    const randomImage = () =>
      imageElements.current[
        Math.floor(Math.random() * imageElements.current.length)
      ];

    const addParticle = (x, y, img) => {
      particles.current.push(new Particle(x, y, img));
    };

    const updateParticles = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((particle) => {
        particle.update(context);
        return particle.lifeSpan > 0;
      });
    };

    const loop = () => {
      updateParticles();
      animationFrameRef.current = requestAnimationFrame(loop);
    };

    class Particle {
      constructor(x, y, img) {
        this.initialLifeSpan = Math.floor(Math.random() * 60 + 80);
        this.lifeSpan = this.initialLifeSpan;
        this.velocity = {
          x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
          y: 1 + Math.random(),
        };
        this.position = { x, y };
        this.image = img;
        this.scale = Math.random() * 0.1 + 0.3;
      }

      update(context) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.lifeSpan--;

        this.velocity.x += ((Math.random() < 0.5 ? -1 : 1) * 2) / 75;
        this.velocity.y -= Math.random() / 300;

        const radians = (2 * this.lifeSpan * Math.PI) / 180;

        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(radians);

        const scaledWidth = this.image.width * this.scale;
        const scaledHeight = this.image.height * this.scale;
        context.drawImage(
          this.image,
          -scaledWidth / 2,
          -scaledHeight / 2,
          scaledWidth,
          scaledHeight
        );
        context.restore();
      }
    }

    init();

    return () => {
      destroy();
    };
  }, [images, wrapperElement]);

  const destroy = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.remove();
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  return <canvas ref={canvasRef} />;
};

export default CustomCursor;
