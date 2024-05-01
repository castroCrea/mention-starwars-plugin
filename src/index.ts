import { MoonPlugin, type PluginMentionItem, type MoonPluginConstructorProps, type MoonPluginSettings, type PluginSettingsDescription } from '@moonjot/moon'

interface MayThe4thSettingsDescription extends PluginSettingsDescription {
}

interface MayThe4thSettings extends MoonPluginSettings {

}

export default class extends MoonPlugin {
  name: string = 'May the 4th'
  logo: string = 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg'

  settingsDescription: MayThe4thSettingsDescription = {
  }

  settings: MayThe4thSettings = {
  }

  constructor (props?: MoonPluginConstructorProps<MayThe4thSettings>) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    super(props)
    if (!props) return
    if (props.settings) this.settings = props.settings
  }

  mention = (): PluginMentionItem[] => {
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
    }
    return [{
      name: 'keywords',
      char: 'May4th',
      htmlClass: 'mention_collections',
      allowSpaces: true,
      getListItem: () => {
        return Object.keys(LIST).map(k => ({ title: k }))
      },
      onSelectItem: (
        { item, addMention }) => {
        const content = LIST[item.title as keyof typeof LIST]
        addMention(content[Math.floor(Math.random() * 10)])
      }
    }]
  }
}
