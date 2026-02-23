import { PageMeta } from "../components/PageMeta";

export default function PageWidgetBuilder() {
  return (
    <article className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 mt-20">
        Build Stunning Custom Widgets in Seconds
      </h1>

      <PageMeta
        category="Widgets"
        readTime="5 min read"
        updatedDate="February 2026"
      />

      {/* INTRO */}
      <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        Meet the AI-Powered Widget Builder
      </h2>

      <p className="text-base leading-7 my-6">
        Say goodbye to complex coding for custom interfaces. With the <strong>Yellow.ai Widget Builder</strong>, if you can describe it, you can build it.
      </p>

      <p className="text-base leading-7 my-6">
        This new feature allows you to create fully functional, interactive widgets for your conversational agents just by typing a simple description. Whether you need an order summary card, a flight tracker, or a feedback form, our AI does the heavy lifting for you.
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/widgets.jpeg"
        className="w-full h-full object-cover"
        />
      </div>

      {/* HOW IT WORKS */}
      <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        How It Works: Three Ways to Start
      </h2>

      <p className="my-6">
        You have complete flexibility in how you begin your design journey. Choose the method that fits your workflow:
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/widget_dashboard.png"
        className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold mt-8">
        1. Just Ask for It (AI Generation)
      </h3>

      <p className="my-4">
        As soon as you open the Widget Builder, you are greeted with a prompt box. This is where the magic starts. Simply type what you need in plain English.
      </p>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li>
          <strong>Example: </strong><em>"Create a flight status card that shows departure and arrival times, terminal info, and a 'Check Status' button."</em>
        </li>
        <li>
          <strong>Pro Tip: </strong>Define interactions too! <em>"When the user clicks 'Details', trigger the 'fetch_details' event."</em>
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">
        2. Start from Scratch
      </h3>

      <p className="my-4">
        Prefer a blank canvas? Select <strong>"Start from scratch"</strong> to open an empty editor. This is perfect for advanced users who have a specific vision and want to build their widget component by component.
      </p>

      <h3 className="text-xl font-semibold mt-8">
        3. Add Widget File
      </h3>

      <p className="my-4">
        Already have a design? Select <strong>"Add widget file"</strong> to upload an existing .widget file. This is great for updating previous work or collaborating with team members.
      </p>

      <div className="rounded-2xl overflow-hidden shadow-elevated">
        <img
        src="public_widget/intro.jpeg"
        className="w-full max-w-md h-auto rounded-2xl"
        />
      </div>

      {/* EDITOR TOUR */}
      <h2 className="text-2xl font-semibold mt-10 mb-6 pb-2 border-b">
        The Widget Editor: A Tour of Your Workspace
      </h2>

      <p className="my-6">
        Once your widget is initialized, you’ll be taken to the <strong>Widget Editor</strong>. This powerful workspace is designed to give you complete control.
      </p>

      <h3 className="text-xl font-semibold mt-8">
        The Visual Stage (Right Panel)
      </h3>

      <p className="my-6">
        This is your real-time preview. As you type code or change settings, this panel updates instantly to show you exactly what your customers will see on their screens.
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/schema.jpeg"
        className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold mt-8">
        The Code Studio (Left Panel)
      </h3>

      <p className="my-6">
        This is the engine room. Here, you define the structure, styling, and logic of your widget.
      </p>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li><strong>Full Control: </strong>Customize every pixel, from background colors to text alignment.</li>
        <li><strong>Smart Editing: </strong>The editor understands widget syntax, helping you build error-free code.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">
        The Component Library
      </h3>

      <p className="my-6">
        Need a button, a text box, or a divider? You don't need to write it from memory.
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/data_controller.jpeg"
        className="w-full h-full object-cover"
        />
      </div>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li>Click the <strong>"Components" </strong>button at the top right.</li>
        <li>Browse a library of pre-built elements.</li>
        <li><strong>Copy & Paste: </strong>Simply copy the component you need and paste it directly into your code editor. It renders instantly!</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">
        The Data Controller (Bottom Left)
      </h3>

      <p className="my-6">
        Located below the code editor, this section manages the "brains" of your widget:
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/default.jpeg"
        className="w-full h-full object-cover"
        />
      </div>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li><strong>Schema Tab: </strong>Define the <strong>variables</strong> your widget accepts (e.g., {"{{flight_number}}"}). This tells the widget to expect real data from the bot.</li>
        <li><strong>Default Tab: </strong>Set "dummy data" to test how your widget looks before it goes live (e.g., setting the flight number to "AB123" just for the preview).</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8">
        JSON View (Bottom Right)
      </h3>

      <p className="my-6">
        Want to see the raw data structure? Click the small <strong>JSON</strong> tab at the bottom right to expand a view of the underlying code that powers your widget.
      </p>

      <div className="rounded-2xl overflow-hidden my-8 shadow-elevated">
        <img
        src="public_widget/json.jpeg"
        className="w-full h-full object-cover"
        />
      </div>

      {/* INTEGRATION */}
      <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        Integration: Bringing Data to Life
      </h2>

      <ol className="list-decimal pl-5 space-y-4 my-6">
        <li>
          <strong>Map Your Variables: </strong>In the Schema section, ensure your widget variables match the data your bot will collect.
        </li>
        <li>
          <strong>Download & Upload: </strong>Download your completed .widget file and upload it to an Output Node in your Flow Builder.
        </li>
        <li>
          <strong>The Agent Workflow: </strong>Configure your agent to ask the user for necessary details (e.g., "What is your flight number?"). Once the agent collects this information, it passes it into the widget's variables.
        </li>
        <li>
          <strong>Dynamic Rendering: </strong>When the bot sends the widget, it automatically replaces your placeholders with the actual data provided by the user, creating a personalized experience instantly.
        </li>
      </ol>

      {/* END USER EXPERIENCE */}
      <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        The End-User Experience
      </h2>

      <p className="my-6">
        It's not just about building easier; it's about a better experience for your customers. The new widgets come with next-generation chat features:
      </p>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li><strong>Streaming UI: </strong>Responses appear with a smooth streaming effect, reducing perceived latency.</li>
        <li><strong>Rich Interactivity: </strong>Users can Copy Text, listen via Text-to-Speech, and provide Like/Dislike feedback directly on the widget.</li>
        <li><strong>Multimedia Support: </strong>Widgets can display rich attachments, such as images or PDF receipts.</li>
        <li><strong>Fully Responsive: </strong>Whether on a desktop or mobile, the layout automatically adjusts to look perfect.</li>
      </ul>

      {/* WHY TRY */}
      <h2 className="text-2xl font-semibold mt-16 mb-6 pb-2 border-b">
        Why Try the Widget Builder?
      </h2>

      <ul className="list-disc pl-5 space-y-2 my-6">
        <li><strong>Zero Coding Required: </strong>You don't need to be a developer to build beautiful UI.</li>
        <li><strong>Real-Time Preview: </strong>See changes instantly as you make them.</li>
        <li><strong>Complete Customization: </strong>From colors to button actions, everything is editable.</li>
      </ul>

      <p className="my-10">
        Ready to upgrade your conversations? Head over to the Widget Builder and create your first masterpiece today!
      </p>

    </article>
  );
}