import React from "react";

const About = () => {
  const articleLink =
    "http://cassybayarea.org/what-are-pink-and-brown-noise-and-what-can-they-do-for-your-brain/#:~:text=Brown%20noise%2C%20which%20contains%20lower,sound%20inside%20a%20mother's%20womb.";

  return (
    <div className="about-wrapper">
      <div className="about">
        <h2>about isolate</h2>
        <p>
          hey, my name's david and I created isolate. during work, i'd
          oftentimes find myself playing brown noise to block out external
          distractions. after a while, i introduced rain sounds into the
          equation, and later on, fireplace sounds. what i would do was
          essentially layer a bunch of sounds together to come up with a unique
          atmosphere that was pleasing to listen to, but not too distracting.
        </p>
        <p>
          one day, i thought to myself: "you should definitely create a website
          that does just this. creates atmospheres - helps you isolate from your
          surroundings." and so i did.
        </p>
        <p>
          after a few weeks of development, isolate was born. currently, it's
          features are very basic, but in the future i want to make the site
          very powerful and highly customizable.
        </p>
        <p>hope you enjoy my creation. isolate.</p>
        <p>- david</p>

        <h2>what's the research behind this?</h2>
        <p>
          let's talk about brown noise for a second. according to{" "}
          <a
            href={articleLink}
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            this article
          </a>{" "}
          from{" "}
          <a
            href="https://cassybayarea.org/"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            cassybayarea.org
          </a>
          : "Brown noise, which contains lower frequencies many find soothing,
          is similar to the brain's resting state, which is why it helps people
          to relax. Brown noise playlists have also been created to help babies,
          since it mimics the sound inside a mother's womb."
        </p>
        <p>
          pretty sick, right? im assuming the rest of the sounds follow suit.
          they make you feel calmer, and that calmness helps clear your mind so
          you can think better.
        </p>
        <p>
          don't just take my word for it though, do your own research. (or don't
          i don't care)
        </p>
        <h2>
          what{" "}
          <a
            href="https://chat.openai.com/chat"
            className="link-underline"
            target="_blank"
            rel="noreferrer"
          >
            chat gpt
          </a>{" "}
          says about soothing sounds
        </h2>
        <p>the prompt was "why do soothing sounds help you focus?"</p>
        <p>here's what it wrote:</p>
        <p>
          Soothing sounds, such as white noise or nature sounds, can help you
          focus because they can mask or drown out distracting background
          noises. When you're trying to concentrate on a task, any noise that is
          irrelevant to what you're doing can be disruptive and make it
          difficult to focus. Soothing sounds can help create a more even
          soundscape, which can make it easier to tune out distractions and
          focus on the task at hand. Additionally, soothing sounds may have a
          calming effect on the brain, which can also help you focus. For
          example, the sound of rain or waves crashing can help to relax the
          mind and create a sense of tranquility, which can make it easier to
          concentrate.
        </p>
      </div>
    </div>
  );
};

export default About;
