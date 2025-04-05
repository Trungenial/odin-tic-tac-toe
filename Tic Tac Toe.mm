<map version="freeplane 1.12.1">
<!--To view this file, download free mind mapping software Freeplane from https://www.freeplane.org -->
<node TEXT="Tic Tac Toe" FOLDED="false" ID="ID_696401721" CREATED="1610381621824" MODIFIED="1743612444355" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle" zoom="1.7715613">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" show_tags="UNDER_NODES" associatedTemplateLocation="template:/standard-1.6.mm" fit_to_viewport="false" show_icons="BESIDE_NODES"/>
    <tags category_separator="::"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ID="ID_271890427" ICON_SIZE="12 pt" COLOR="#000000" STYLE="fork">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" DASH="" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_271890427" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
<richcontent TYPE="DETAILS" CONTENT-TYPE="plain/auto"/>
<richcontent TYPE="NOTE" CONTENT-TYPE="plain/auto"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.tags">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.selection" BACKGROUND_COLOR="#afd3f7" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#afd3f7"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important" ID="ID_67550811">
<icon BUILTIN="yes"/>
<arrowlink COLOR="#003399" TRANSPARENCY="255" DESTINATION="ID_67550811"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.flower" COLOR="#ffffff" BACKGROUND_COLOR="#255aba" STYLE="oval" TEXT_ALIGN="CENTER" BORDER_WIDTH_LIKE_EDGE="false" BORDER_WIDTH="22 pt" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#f9d71c" BORDER_DASH_LIKE_EDGE="false" BORDER_DASH="CLOSE_DOTS" MAX_WIDTH="6 cm" MIN_WIDTH="3 cm"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10 pt" SHAPE_VERTICAL_MARGIN="10 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="12" RULE="ON_BRANCH_CREATION"/>
<node TEXT="Two players need to enter there names and the scale of board on the screen before they can play the game" POSITION="bottom_or_right" ID="ID_737454500" CREATED="1743765315467" MODIFIED="1743765392905">
<edge COLOR="#ff0000"/>
<node TEXT="Create a function that accept player&apos;s names and assign it to player 1 and 2" ID="ID_503359598" CREATED="1743765580806" MODIFIED="1743765622362">
<font BOLD="true"/>
<node TEXT="Input" ID="ID_1729051273" CREATED="1743765649223" MODIFIED="1743765650717">
<node TEXT="player1&apos;s name" ID="ID_1984925708" CREATED="1743765650724" MODIFIED="1743765658253"/>
<node TEXT="player2&apos;s name" ID="ID_1161087338" CREATED="1743765658394" MODIFIED="1743765663972"/>
</node>
<node TEXT="output" ID="ID_1837341652" CREATED="1743765664954" MODIFIED="1743765667938">
<node TEXT="Correct names of player 1 and player 2" ID="ID_381847638" CREATED="1743765667947" MODIFIED="1743765737257"/>
</node>
</node>
<node TEXT="interface" ID="ID_1413870001" CREATED="1743765577523" MODIFIED="1743765580038">
<node TEXT="create an interface that covers the screen before 2 players can play" ID="ID_123399044" CREATED="1743765392915" MODIFIED="1743765575868">
<font BOLD="false"/>
<node TEXT="diaglog" ID="ID_1960883478" CREATED="1743765545834" MODIFIED="1743779959649"/>
</node>
</node>
</node>
<node TEXT="There are n cells that user can tick" POSITION="bottom_or_right" ID="ID_880858477" CREATED="1743612624166" MODIFIED="1743686283946">
<edge COLOR="#0000ff"/>
<node TEXT="create An function that create two-dimension array with n elements" ID="ID_634749287" CREATED="1743613093305" MODIFIED="1743686601657">
<font BOLD="true"/>
<node TEXT="Input" ID="ID_1429863349" CREATED="1743686776137" MODIFIED="1743686780827">
<node TEXT="a number to create N x N cells" ID="ID_1360774242" CREATED="1743686780834" MODIFIED="1743686812758"/>
</node>
<node TEXT="Output" ID="ID_1056295942" CREATED="1743686601666" MODIFIED="1743686603412">
<node TEXT="an N x N two-dimension array" ID="ID_1134935889" CREATED="1743686603419" MODIFIED="1743686829988"/>
</node>
</node>
<node TEXT="interface" ID="ID_1910409540" CREATED="1743740160159" MODIFIED="1743740165290">
<node TEXT="create a box that player can choose the size of gameboard" ID="ID_1052365413" CREATED="1743740165786" MODIFIED="1743740221359"/>
<node TEXT="create a confirm button to change the scale of board" ID="ID_845811245" CREATED="1743751025712" MODIFIED="1743751046153"/>
<node TEXT="use that size and call the createBoard() function" ID="ID_1502226745" CREATED="1743740221852" MODIFIED="1743740265272"/>
<node TEXT="display that board on the screen" ID="ID_1449822115" CREATED="1743740267669" MODIFIED="1743740279953"/>
</node>
</node>
<node TEXT="After each click, add the current player&apos;s char into the cell" POSITION="bottom_or_right" ID="ID_1728321908" CREATED="1743686050212" MODIFIED="1743686094022">
<edge COLOR="#7c007c"/>
<node TEXT="Insert X or O to the array" ID="ID_1985019238" CREATED="1743684706072" MODIFIED="1743686050226">
<node TEXT="Create a func that insert player&apos;s mark to the array" ID="ID_1452364729" CREATED="1743684721272" MODIFIED="1743684845182">
<font BOLD="true"/>
<node TEXT="Input" ID="ID_1924864971" CREATED="1743684753323" MODIFIED="1743684754620">
<node TEXT="Player Object" ID="ID_848931796" CREATED="1743684754628" MODIFIED="1743684996415">
<node TEXT="player&apos; mark, X or O" ID="ID_1204683631" CREATED="1743684518778" MODIFIED="1743684520671"/>
<node TEXT="coordinate of that mark" ID="ID_1157477524" CREATED="1743614180140" MODIFIED="1743684335312"/>
</node>
<node TEXT="array board" ID="ID_690197327" CREATED="1743690509455" MODIFIED="1743690514708"/>
</node>
<node TEXT="Output" POSITION="bottom_or_right" ID="ID_656706828" CREATED="1743684855899" MODIFIED="1743684860876">
<node TEXT="Success in inserting the mark to the array" ID="ID_1671634998" CREATED="1743684860882" MODIFIED="1743684986224"/>
</node>
</node>
<node TEXT="interface" ID="ID_524852841" CREATED="1743750918906" MODIFIED="1743750926906">
<node TEXT="player click, add player&apos;s mark to the cell" ID="ID_673420576" CREATED="1743750927300" MODIFIED="1743750991732"/>
<node TEXT="after each click, switch the player" ID="ID_1320288361" CREATED="1743750999814" MODIFIED="1743751052608"/>
</node>
</node>
</node>
<node TEXT="After each click, check if one wins or tie!" POSITION="bottom_or_right" ID="ID_1643150861" CREATED="1743614578056" MODIFIED="1743614615110">
<edge COLOR="#ff00ff"/>
<node TEXT="" POSITION="bottom_or_right" ID="ID_640438345" CREATED="1743684567592" MODIFIED="1743684567592">
<hook NAME="FirstGroupNode"/>
</node>
<node TEXT="If horizontally there are x consecutive boxes containing the same character, that character wins." POSITION="bottom_or_right" ID="ID_731740891" CREATED="1743650235133" MODIFIED="1743685968602"/>
<node TEXT="If there are x consecutive cells vertically containing the same character, that character wins." POSITION="bottom_or_right" ID="ID_1729687577" CREATED="1743650427326" MODIFIED="1743685974065"/>
<node TEXT="If there are x consecutive boxes diagonally containing the same character, that character wins." POSITION="bottom_or_right" ID="ID_347663308" CREATED="1743650662807" MODIFIED="1743685980371"/>
<node TEXT="" POSITION="bottom_or_right" ID="ID_477695835" CREATED="1743684567587" MODIFIED="1743684567591">
<hook NAME="SummaryNode"/>
<hook NAME="AlwaysUnfoldedNode"/>
<node TEXT="Create a func that result in if a player wins" ID="ID_1712763998" CREATED="1743613313733" MODIFIED="1743684939897">
<font BOLD="true"/>
<node TEXT="Input" POSITION="bottom_or_right" ID="ID_393525001" CREATED="1743613466362" MODIFIED="1743684851885">
<node TEXT="Player Object" POSITION="bottom_or_right" ID="ID_153991908" CREATED="1743684771899" MODIFIED="1743685001484">
<node TEXT="player&apos; mark, X or O" ID="ID_900627642" CREATED="1743684518778" MODIFIED="1743684520671"/>
<node TEXT="coordinate of that mark" ID="ID_769458587" CREATED="1743614180140" MODIFIED="1743684335312"/>
</node>
</node>
<node TEXT="Output" ID="ID_1804257360" CREATED="1743684533175" MODIFIED="1743684535203">
<node TEXT="Returns X if X wins, vice versa if O wins, tie! if no one wins" ID="ID_1354256558" CREATED="1743684347013" MODIFIED="1743684504862"/>
</node>
</node>
<node TEXT="interface" ID="ID_1364354410" CREATED="1743781595430" MODIFIED="1743781599648">
<node TEXT="when player wins, print win on the result section" ID="ID_465923019" CREATED="1743781599662" MODIFIED="1743781630657"/>
<node TEXT="when player tie, print tie on the result section" ID="ID_108550616" CREATED="1743781631809" MODIFIED="1743781656456"/>
</node>
</node>
</node>
<node TEXT="two players take turns playing" POSITION="bottom_or_right" ID="ID_1659161306" CREATED="1743615150878" MODIFIED="1743615152883">
<edge COLOR="#00ffff"/>
<node ID="ID_1156246484" CREATED="1743615161904" MODIFIED="1743684842294"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      Create <content ename="content"/><content ename="content"/>a function that take<content ename="content"/>&#xa0;<content ename="content"/>turn playing
    </p>
  </body>
</html>
</richcontent>
<font BOLD="true"/>
<node TEXT="Input" ID="ID_946186141" CREATED="1743685280861" MODIFIED="1743685282172">
<node TEXT="Current player object" ID="ID_190706538" CREATED="1743685282179" MODIFIED="1743685320787"/>
<node TEXT="Player Object 1" ID="ID_447846529" CREATED="1743685311401" MODIFIED="1743685447379"/>
<node TEXT="Player Object 2" ID="ID_8032622" CREATED="1743685447712" MODIFIED="1743685451814"/>
</node>
<node TEXT="Output" ID="ID_748525497" CREATED="1743685330760" MODIFIED="1743685340751">
<node TEXT="Reassign new Player Object to the Current Player Object" ID="ID_934553640" CREATED="1743685340757" MODIFIED="1743685923271"/>
</node>
</node>
</node>
<node TEXT="When user click start game, start game" POSITION="bottom_or_right" ID="ID_1176293482" CREATED="1743686020815" MODIFIED="1743686128218">
<edge COLOR="#007c00"/>
<node TEXT="Create a function that start game" ID="ID_1405192683" CREATED="1743686128418" MODIFIED="1743686255523">
<font BOLD="true"/>
<node TEXT="Input" ID="ID_1279414344" CREATED="1743686187730" MODIFIED="1743686189369">
<node TEXT="click action" ID="ID_1766359063" CREATED="1743686189375" MODIFIED="1743686195020"/>
</node>
<node TEXT="Output" ID="ID_1431167962" CREATED="1743686197456" MODIFIED="1743686207669">
<node TEXT="Start the game" ID="ID_1429280342" CREATED="1743686207674" MODIFIED="1743686214796"/>
</node>
</node>
</node>
<node TEXT="When user click reset table, reset table" POSITION="bottom_or_right" ID="ID_915682406" CREATED="1743686144300" MODIFIED="1743686165389">
<edge COLOR="#007c7c"/>
<node TEXT="Create a function that reset table" ID="ID_331893544" CREATED="1743686166294" MODIFIED="1743686255527">
<font BOLD="true"/>
<node TEXT="Input" ID="ID_1472805414" CREATED="1743686220452" MODIFIED="1743686224921">
<node TEXT="click action" ID="ID_872435484" CREATED="1743686224927" MODIFIED="1743686227381"/>
</node>
<node TEXT="Out put" ID="ID_437548101" CREATED="1743686228144" MODIFIED="1743686230151">
<node TEXT="Reset table" ID="ID_702898402" CREATED="1743686230156" MODIFIED="1743686235572"/>
</node>
</node>
</node>
</node>
</map>
