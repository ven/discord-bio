const { React } = require('powercord/webpack');
const { SwitchItem, SelectInput } = require('powercord/components/settings');

module.exports = class DiscordBioSettings extends React.PureComponent {
  render() {
    const { getSetting, toggleSetting, updateSetting } = this.props;

    return (
      <div className='discord-bio-settings'>
        {/*
        Outcommented while I figure out how we can make this work
        <SwitchItem
          value={getSetting('show-banner', true)}
          onChange={() => toggleSetting('show-banner', true)}
          note="Shows the user's discord.bio banner if they have one. Also add the '.banner' utility CSS class to the header of the user profile modal."
        >
          Show Banner
        </SwitchItem>*/}
        <SelectInput
          note='Change the format of how dates are displayed in bios.'
          searchable={false}
          value={getSetting('date-format', 'DD.MM.YYYY')}
          options={[
            { label: 'DD.MM.YYYY', value: 'DD.MM.YYYY' },
            { label: 'MM.DD.YYYY', value: 'MM.DD.YYYY' },
            { label: 'DD/MM/YYYY', value: 'DD/MM/YYYY' },
            { label: 'MM/DD/YYYY', value: 'MM/DD/YYYY' },
          ]}
          onChange={(t) => updateSetting('date-format', t.value)}
        >
          Date Format
        </SelectInput>
      </div>
    );
  }
};
