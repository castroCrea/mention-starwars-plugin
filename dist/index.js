"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moon_1 = require("@moonjot/moon");
const logo = `<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_259_195)">
<rect width="512" height="512" fill="black"/>
<path d="M400.601 216.889C401.814 221.417 402.461 226.096 403.674 230.624C366.15 255.844 319.185 277.527 265.417 291.934C211.084 306.493 159.57 311.197 115.028 307.966C113.249 303.59 112.036 299.062 110.823 294.535C89.44 214.733 136.521 132.357 216.889 110.823C249.149 102.179 282.745 105.309 311.369 117.051C314.087 118.142 316.392 119.951 317.15 122.781L319.577 131.836C320.941 136.93 317.475 142.105 312.947 143.318L294.836 148.171C289.743 149.536 286.994 155.125 288.207 159.653L293.06 177.764C294.425 182.858 299.448 185.758 304.542 184.393L331.709 177.114L340.764 174.688C345.292 173.475 351.033 176.789 352.246 181.317L357.099 199.428C358.464 204.522 363.487 207.422 368.581 206.057L386.126 201.356C391.22 199.991 395.526 202.477 397.457 207.419C398.215 210.249 399.691 213.493 400.601 216.889ZM294.535 400.601C225.486 419.102 155.584 386.877 123.166 327.017C168.122 329.53 218.201 323.997 270.27 310.045C295.173 303.372 319.055 295.153 341.35 285.54L345.141 299.689C346.506 304.783 351.529 307.683 356.623 306.318L374.734 301.465C379.262 300.252 385.003 303.567 386.216 308.095L389.249 319.414C389.856 321.678 389.179 323.679 387.936 325.832C369.635 361.673 336.417 389.378 294.535 400.601ZM186.82 215.937C184.242 206.315 189.891 195.703 200.078 192.973C209.7 190.395 220.464 196.61 223.042 206.231C225.772 216.419 219.405 226.617 209.784 229.195C199.596 231.925 189.55 226.125 186.82 215.937ZM250.209 198.952C245.962 183.105 232.964 170.816 217.106 165.966C200.833 161.834 183.288 166.535 171.828 178.098C159.954 190.379 155.407 207.369 159.653 223.216C164.051 239.629 176.484 252.07 192.908 256.768C208.614 261.052 226.159 256.351 238.185 244.636C249.494 232.507 254.607 215.365 250.209 198.952Z" fill="url(#paint0_linear_259_195)"/>
</g>
<defs>
<linearGradient id="paint0_linear_259_195" x1="197.5" y1="121" x2="478.5" y2="870" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<clipPath id="clip0_259_195">
<rect width="512" height="512" rx="60" fill="white"/>
</clipPath>
</defs>
</svg>
`;
class default_1 extends moon_1.MoonPlugin {
    constructor(props) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        super(props);
        this.name = 'May the 4th';
        this.logo = logo;
        this.settingsDescription = {};
        this.settings = {};
        this.mention = () => {
            const LIST = {
                Yoda: [
                    'Do or do not. There is no try.',
                    'Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.',
                    'In a dark place we find ourselves, and a little more knowledge lights our way.',
                    'Train yourself to let go of everything you fear to lose.',
                    'Size matters not. Look at me. Judge me by my size, do you?',
                    'Wars not make one great.',
                    'Luminous beings are we, not this crude matter.',
                    'Always pass on what you have learned.',
                    'You must unlearn what you have learned.',
                    'Difficult to see. Always in motion is the future.'
                ],
                'Obi-Wan Kenobi': [
                    'The Force will be with you, always.',
                    "Your eyes can deceive you. Don't trust them.",
                    "In my experience, there's no such thing as luck.",
                    'Many of the truths we cling to depend greatly on our own point of view.',
                    "Luke, you're going to find that many of the truths we cling to depend greatly on our own point of view.",
                    'You were the chosen one! It was said that you would destroy the Sith, not join them!',
                    "Be mindful of your thoughts, Anakin. They'll betray you.",
                    "Who's the more foolish, the fool or the fool who follows him?",
                    'If you strike me down, I shall become more powerful than you can possibly imagine.',
                    "The Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us. It binds the galaxy together."
                ],
                'Emperor Palpatine': [
                    'Good is a point of view, Anakin. The Sith and the Jedi are similar in almost every way, including their quest for greater power.',
                    'The dark side of the Force is a pathway to many abilities some consider to be unnatural.',
                    'I am the Senate.',
                    'Power! Unlimited power!',
                    'The Force is strong with you. A powerful Sith you will become. Henceforth, you shall be known as Darth... Vader.',
                    'Everything is proceeding as I have foreseen.',
                    'Once more the Sith will rule the galaxy. And we shall have peace.',
                    'The attempt on my life has left me scarred and deformed, but I assure you, my resolve has never been stronger.',
                    'It is unavoidable. It is your destiny.',
                    'Now, young Skywalker, you will die.'
                ],
                'Luke Skywalker': [
                    'I am a Jedi, like my father before me.',
                    'This is not going to go the way you think.',
                    "I won't fail you. I'm not afraid.",
                    'The greatest teacher, failure is.',
                    'The Force will be with you, always.',
                    "I will never turn to the dark side. You've failed, your highness. I am a Jedi, like my father before me.",
                    "No one's ever really gone.",
                    "I can't kill my own father.",
                    'See you around, kid.',
                    'Confronting fear is the destiny of a Jedi.'
                ]
            };
            return [{
                    name: 'May4th',
                    char: 'May4th',
                    htmlClass: 'mention_collections',
                    allowSpaces: true,
                    getListItem: () => {
                        return Object.keys(LIST).map((k) => ({ title: k, quotes: LIST[k] }));
                    },
                    onSelectItem: ({ item, editor, deleteMentionPlaceholder }) => {
                        const content = item.quotes;
                        const sentence = content[Math.floor(Math.random() * 10)];
                        deleteMentionPlaceholder();
                        editor.commands.insertContent(sentence);
                    }
                }];
        };
        if (!props)
            return;
        if (props.settings)
            this.settings = props.settings;
        this.log = props.helpers.moonLog;
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map