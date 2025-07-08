class TemplateHeader extends HTMLElement{
  constructor() {
    super();
    this.innerHTML = `
    <div id="header" style="height: 0px;">
    </div>
      <div id="headerArea">
        <nav id="navbar" style="margin-bottom: 10px;">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="experience.html">Experience</a></li>
          </ul>
        </nav>
      </div>
    `;
    
  }
}

customElements.define('template-header', TemplateHeader);




class TemplateFooter extends HTMLElement{
  constructor(){
    super();
  
    this.innerHTML=`
    <footer id="footer" style="margin-top: 10px;">
    <br>
    <br>
    <br>
    <div id="container2" style="width:50%;">
      <h2>Want to Reach Out?</h2>
      <h3>Discord: @dogsama</h3>
      <h3><a href="https://www.linkedin.com/in/connnand/">LinkedIn</a></h3>
    </div>
      <br>
      </footer>
    `;}}
    
customElements.define('template-footer', TemplateFooter);




class InfoSidebar extends HTMLElement{
  constructor(){
    super();
    
    this.innerHTML=`
    <aside id="leftSidebar" style="width:200px">
          <h2>Info</h2>
          <div class="box">
            <p>Links to some games I made!</p>
            <ul style="padding-left:10px;">
              <li><a href="https://dog-sama.itch.io/rascal-rumble" target="_blank">Rascal
                  Rumble</a>: <br>
                Solo Project</li>
              <li><a href="https://adamson44.itch.io/isles-of-aether" target="_blank">Isles
                  of Aether</a>: <br>
                Sound Design Lead</li>
              <li><a href="https://thepeachyone.itch.io/root-force" target="_blank">Root Force</a>: <br>
                Project Lead, Gameplay Programmer</li>
              <li><a href="https://dog-sama.itch.io/treasurekeeper" target="_blank">TreasureKeeper</a>:
                <br>
                Project Lead, Sound Designer</li>
              <li><a href="https://itch.io/jam/2023-epic-megajam/rate/2275706" target="_blank">Cowboy
                  Defense Force</a>: <br>
                Level Designer</li>
              <li><a href="https://github.com/ThePeachyOne/ETGG-1802-Project" target="_blank">Light
                  &amp; Dark</a>: <br>
                Networking Master B)</li>
              <li><a href="https://zsmitty2020.itch.io/gunkey" target="_blank">Gunkey</a>: <br>
                Sound Designer, Gameplay Programmer</li>
              <li><a href="https://zsmitty2020.itch.io/trashlord" target="_blank">Trash Lord</a>: <br>
                Sound Designer, Gameplay Programmer</li>
              <li><a href="https://threethreeone.itch.io/fear-the-forgotten" target="_blank">Fear the Forgotten</a>: <br>
                Sound Designer, Project Lead</li>
              <li><a href="https://thepeachyone.itch.io/lil-bro" target="_blank">Lil' Bro</a>: <br>
                Level Designer, Gameplay Systems Programmer, Sound Designer</li>
              <li>
                <p>More soon to come...</p>
              </li>
            </ul>
          </div>
          <h2>Looking to Reach Out?</h2>
          <p>You can find me at some of the following, as well as some other
            random links to me:</p>
          <ul>
            <li><a href="https://bsky.app/profile/dog-sama.bsky.social" target="_blank">Bluesky</a></li>
            <li><a href="https://dog-sama.itch.io" target="_blank">Itch.io</a></li>
            <li><a href="https://vrchat.com/home/user/usr_f1e13c58-2e89-4f5c-90b6-e506fbcb77e5" target="_blank">VRChat</a></li>
            <li><a href="https://www.reddit.com/user/Dog_Sama" target="_blank">Reddit</a></li>
          </ul>
          <p>You can also message me on Discord at @dogsama</p>
          <div>
</div>
        </aside>
    `;}}

customElements.define('info-sidebar', InfoSidebar);