function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Lean Settings</Text>}>
      </Section>
      <Section
        title={<Text>Time color</Text>}>
        <ColorSelect
          settingsKey="timeColor"
          colors={[
            {color: 'darkblue'},
            {color: 'navy'},
            {color: 'black'},
            {color: 'darkred'},
            {color: 'darkslategray'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'goldenrod'},
            
            {color: 'aqua'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},
            {color: 'floralwhite'},
            {color: 'gold'},
            {color: 'greenyellow'},
            {color: 'khaki'},
            {color: 'lawngreen'},
            {color: 'yellow'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'pink'}
          ]}
        />
      </Section>
        
      <Section
        title={<Text>Background color</Text>}>
        <ColorSelect
          settingsKey="backColor"
          colors={[
            {color: 'darkblue'},
            {color: 'navy'},
            {color: 'black'},
            {color: 'darkred'},
            {color: 'darkslategray'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'goldenrod'},
            
            {color: 'aqua'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},
            {color: 'floralwhite'},
            {color: 'gold'},
            {color: 'greenyellow'},
            {color: 'khaki'},
            {color: 'lawngreen'},
            {color: 'yellow'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'pink'}
                     ]}
        />
      </Section>        
      
      
        
       <Section title={<Text bold align="center">Donate!</Text>}>
      
      <Text italic>If you like this clockface and would like to see it further developed as well as other wonderful Fitbit apps and faces created, please know - I run on coffee. It's an essential fuel for inspiration and creativity. So feel free to tap the link below to donate so I won't run out of fuel :) Thanks!
      </Text>
      
      <Link source="https://paypal.me/yuriygalanter">YURIY'S COFFEE FUND</Link> 
         
         </Section>   
      
      
    </Page>
  );
}

registerSettingsPage(mySettings);