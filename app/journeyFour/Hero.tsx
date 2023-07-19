import React from "react";
import DetailsBox from "../components/DetailsBox";
import Menu from "../components/Menu";

type Props = {};

const Hero = (props: Props) => {
  const journeyOneSlides = [
    {
      heading: "Noah's Ark",
      para1:
        "Once upon a time, there was a man named Noah. He loved animals and was a friend of God. God told Noah about a big flood that would wash away the bad things in the world. Noah was asked to build a big boat called an ark, so he and the animals would be safe.",
      para2:
        "Noah gathered his family and started working together to build the huge ark. They collected lots of wood and made many rooms inside the ark. Animals of every kind came to Noah—lions, elephants, birds, and many more. Two by two, they entered the ark as Noah took care of them.",
      para3:
        "People laughed at Noah, but he trusted God and continued building the ark. He knew that God would keep them safe from the coming flood. As Noah worked hard, his family helped, and the ark began to take shape. They were excited to see it coming together, bit by bit.",
      para4:
        "Finally, the ark was finished, sturdy and strong. It was time to bring the animals inside, where they would belong. Noah and his family led the animals into the ark, following God's plan. Each animal found its place, as the adventure began.",
      img: "/img/noah/one.jpg",
    },
    {
      heading: "Noah's Ark - 2",
      para1:
        "Then, dark clouds gathered, and raindrops started to fall. The rain grew heavier, pouring down on one and all. It rained and rained for many days and nights, While inside the ark, they stayed safe from the flood's might.",
      para2:
        "The water rose, covering the earth far and wide. But Noah and his family, with the animals, were safe inside. They trusted in God's promise and knew they would survive. For they had faith that God would keep them alive.",
      para3:
        "As the rain continued, the ark floated upon the deep sea. Noah's family cared for the animals with love and glee. Inside the ark, they found peace and safety. While outside, the floodwaters roared with great intensity.",
      para4:
        "Days turned into weeks, and the weeks into months. The rain persisted, but they stayed strong, trusting in their trust. Noah's family cared for the animals' needs each day, Feeding them and making sure they were okay.",
      img: "/img/noah/two.jpg",
    },
    {
      heading: "Noah's Ark - 3",
      para1:
        "Then, one day, the rain began to taper, The clouds slowly cleared, bringing hope and a glimmer. Noah sent out a dove to find signs of dry land. The dove returned with no news, so they patiently planned.",
      para2:
        "The dove went out again and returned with an olive leaf. Noah knew it was a sign that land was now beneath. His heart filled with joy as they awaited the day when they could step off the ark and start a new way.",
      para3:
        "Finally, the day arrived, and Noah opened the ark's door. The animals eagerly stepped out, excited to explore. Noah's family followed, grateful and full of cheer, They were filled with gratitude for their faith's frontier.",
      para4:
        "They thanked God for His protection and love, for guiding them through the flood from high above. As they left the ark, they saw a sky so clear, and a rainbow arched across, bringing them cheer.",
      img: "/img/noah/three.jpg",
    },
    {
      heading: "Noah's Ark - 4",
      para1:
        "God spoke to Noah, making a promise so grand, He vowed to never send a flood to cover the land. The rainbow became a sign, a colorful embrace, A symbol of God's love and His saving grace.",
      para2:
        "Noah and his family built a new home on the land, with the animals around, a diverse and wonderful band. They started anew, with grateful hearts and a brand-new start, knowing they would forever be in God's loving heart.",
      para3:
        "The story of Noah's Ark reminds us to trust in God's plan, to have faith and be kind, just like Noah and his clan. No matter how big the storm, or how dark the night, with God by our side, we can make things right.",
      para4:
        "So remember Noah's story and the lessons it imparts, of trust, perseverance, and love in our hearts. No matter the challenges we may face each day, God's love will guide us, leading the way.",
      img: "/img/noah/four.jpg",
    },
  ];
  return (
    <div>
      <DetailsBox slides={journeyOneSlides} />
      <Menu />
    </div>
  );
};

export default Hero;
