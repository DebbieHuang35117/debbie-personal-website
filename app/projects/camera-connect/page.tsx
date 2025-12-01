// app/projects/[slug]/page.tsx
"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ProjectPage() {

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-8"
    >

    📸 A mobile application designed to streamline the photo and video sharing process, enabling users to share life's moments instantly with closed ones. 📸


## Table of Contents

- [Table of Contents](#table-of-contents)
- [Our Vision 🌟](#our-vision-)
- [Features ✨](#features-)
- [Setup 🛠️](#setup-️)
- [Demo 🎥](#demo-)

## Our Vision 🌟

In the digital era, sharing life's moments instantly is more than a convenience—it's a way of staying connected. **Camera Connect** emerges as a pioneering mobile application designed to fulfill this need, allowing users to share photos and videos within private groups effortlessly.

Camera Connect is engineered to streamline the photo and video sharing process, integrating in-app capturing and editing tools, and interaction features, aiming to increase user engagement. Its aim is to transform how friends and family share experiences, simplifying the connection process and making sharing moments instantaneous.

## Features ✨

The Camera Connect application offers a seamless user experience, providing a range of features that cater to the needs of modern-day users:

1. **Instant Capture and Share**: Capture photos and videos within the app and share them instantly with private groups. The in-app camera opens up as soon as the user launches the app.
2. **Album Sharing and Management**: Create albums within the app and share them with private groups. Manage albums by adding or removing photos and videos, and organizing them as per preference.
3. **Effortless Exploration**: Explore photos and videos shared by friends and family members with a user-friendly interface.
4. **Interactive Features**: Includes comments, likes, and reactions to engage with shared content and express thoughts and emotions.
5. **Tinder-like Swipe**: Swipe left or right to like or dislike photos and videos, making the interaction process fun and engaging.
6. **QR Code Connectivity**: Add friends and invite them to join private groups by scanning a unique QR code.
7. **Optimized Performance**: Ensures fast loading times, smooth navigation, and seamless sharing by utilizing the local storage of the device.

## Setup 🛠️

Before running the application, ensure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/en/download/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [NPM](https://www.npmjs.com/get-npm)
- [Expo Go](https://expo.dev/client)
- [Git](https://git-scm.com/downloads)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) (Optional, for running the application on an emulator)
    </motion.div>
    );
}