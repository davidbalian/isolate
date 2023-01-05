import React, { useEffect, useState } from "react";

const About = () => {

    const articleLink = 
    "http://cassybayarea.org/what-are-pink-and-brown-noise-and-what-can-they-do-for-your-brain/#:~:text=Brown%20noise%2C%20which%20contains%20lower,sound%20inside%20a%20mother's%20womb.";

    return (
        <div className="about-wrapper">
            <div className="about">
            <h2>about isolate</h2>
            <p>hey, my name's david and I created isolate. during work, i'd oftentimes find myself playing brown noise to block out external distractions.
                after a while, i introduced rain sounds into the equation, and later on, fireplace sounds. what i would do was essentially layer a bunch of sounds
                together to come up with a unique atmosphere that was pleasing to listen to, but not too distracting.
            </p>
            <p>one day, i thought to myself: "you should definitely create a website that does just this.
                creates atmospheres - helps you isolate from your surroundings." and so i did.</p>
            <p>after a few weeks of development, isolate was born. currently, it's features are very basic, but in the future i want to make the site very powerful and
                highly customizable.
            </p>
            <p>hope you enjoy my creation. isolate.</p>
            <p>- david</p>

            <h2>what's the research behind this?</h2>
            <p>let's talk about brown noise here for a second. according to <a href={articleLink}>this article</a> from <a href="https://cassybayarea.org/">cassybayarea.org</a>: "Brown noise, which contains lower frequencies many find soothing,
                is similar to the brain's resting state, which is why it helps people to relax. Brown noise playlists have also been created to help babies, since it mimics the
                sound inside a mother's womb."
            </p>
            <p>pretty sick, right? im assuming the rest of the sounds follow suit. they make you feel calmer, and that calmness helps clear your mind so you can think better.</p>
            <p>don't just take my word for it though, do your own research. (or don't i don't care)
            </p>
            </div>
        </div>
    );
};

export default About;