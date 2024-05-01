import { MoonPlugin, type PluginMentionItem, type MoonPluginConstructorProps, type MoonPluginSettings, type PluginSettingsDescription } from '@moonjot/moon';
interface MayThe4thSettingsDescription extends PluginSettingsDescription {
}
interface MayThe4thSettings extends MoonPluginSettings {
}
export default class extends MoonPlugin {
    name: string;
    logo: string;
    settingsDescription: MayThe4thSettingsDescription;
    settings: MayThe4thSettings;
    constructor(props?: MoonPluginConstructorProps<MayThe4thSettings>);
    mention: () => PluginMentionItem[];
}
export {};
