"use strict";

module.exports = {

    config: {

        // choose either `'stable'` for receiving highly polished,
        // or `'canary'` for less polished but more frequent updates
        updateChannel: 'canary',
	    commands: ["cd 'C:\\Users\\User\\Documents\\Github\\'"],

        // default font size in pixels for all tabs
        fontSize: 18,

        // font family with optional fallbacks
        fontFamily: '"Fira Code", "Roboto Mono", "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
        // default font weight: 'normal' or 'bold'
        fontWeight: 'light',
        // font weight for bold characters: 'normal' or 'bold'
        fontWeightBold: 'bold',
        // line height as a relative unit
        lineHeight: 1.25,
        // letter spacing as a relative unit
        letterSpacing: 0,
        // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
        cursorColor: 'rgba(248,28,229,0.8)',
        // terminal text color under BLOCK cursor
        cursorAccentColor: '#000',
        // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
        cursorShape: 'BLOCK',
        // set to `true` (without backticks and without quotes) for blinking cursor
        cursorBlink: true,
        // color of the text
        foregroundColor: '#fff',
        // terminal background color
        // opacity is only supported on macOS
        backgroundColor: '#580663',
        // terminal selection color
        selectionColor: 'rgba(248, 28, 230, 0.666)',
      // we want to go frameless on windows and linux
        frame: true,
        transparent: true,
        // border color (window, tabs)
        borderColor: '#333',
        // custom CSS to embed in the main window
        css: `
            .hyper_main, body, html, #mount {
                border: 4px solid rgba(206, 0, 189, 0.500);
                border-radius: 5px;
            }
            body, html, .term_wrapper, .term_fit, .term_active, #hyper .terminal .xterm .xterm-screen .xterm-screen , .xterm_decoration_container  {
                font-family: "Fira Code", mono;
                font-smoothing: subpixel-antialiased !important;
            }
            .header_windowHeader {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid rgba(206, 0, 189, 0.300);
                background: rgba(206, 0, 189, 0.100);
                > span {
                    align-self: flex-center;
                    justify-self: flex-start;
                    font-size: 0.75rem;
                    margin-left: 50px;
                    color: rgba(206, 0, 189, 0.700);
                    font-weight: bold;
                }
                > .header_windowControls {
                    display: flex;
                    background: rgba(206, 0, 189, 0.100);
                    border-radius: 5px;
                    margin-top: 5px;
                    height: 25px;
                    margin-right: 5px;
                    align-items: center;
                    border: 2px solid rgba(206, 0, 189, 0.300);
                    > div {
                        &:hover {
                            background: rgba(206, 0, 189, 0.300);
                        }
                        height: 100%;
                        display: flex;
                        align-items: center;
                        width: 100%;
                        overflow: hidden;
                        justify-content: center;
                        &:first-of-type {
                            border-right: 2px solid rgba(206, 0, 189, 0.300);
                        }
                        &:last-of-type {
                            border-left: 2px solid rgba(206, 0, 189, 0.300);
                        }
                    }
                }
            }
            nav.tabs_nav {
                border: 1px solid rgba(206, 0, 189, 0.300);
                border-top: none;
                > ul {
                    > li {
                        border: none;
                        width: 20px;
                        background: rgba(206, 0, 189, 0.100);
                        whitespace: pre-wrap;
                        &:hover {
                            background: rgba(206, 0, 189, 0.200);
                        }
                    }
                }
            }
            body, html, .term_wrapper  {
                // thin wrapper around terminal window
                border: 2px solid rgba(206, 0, 189, 0.300);
                padding: 20px;
                font-smoothing: subpixel-antialiased !important;
                border-radius: 10px;
            }
            .term_fit .term_active .terms_terms, .xterm-screen .xterm-screen , .xterm_decoration_container {
            }
            .xterm-screen {
                > canvas {
                }
                > canvas:last-of-type {
                }
            }
        `,
        // custom CSS to embed in the terminal window
        termCSS: `
            background: rgba(206, 0, 189, 0.500);
            border-radius: 5px;
            .term_fit .term_active .terms_terms {
                background: blue !important;
            }
            body, html, .term_wrapper, .term_fit, .term_active, #hyper .terminal .xterm .xterm-screen .xterm-screen , .xterm_decoration_container  {
                font-family: "Fira Code", mono;
                font-smoothing: subpixel-antialiased !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial !important;
            }
        `,
        // set custom startup directory (must be an absolute path)
        workingDirectory: 'C:/Users/User/Documents/Github/',
        // if you're using a Linux setup which show native menus, set to false
        // default: `true` on Linux, `true` on Windows, ignored on macOS
        showHamburgerMenu: '',
        // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
        // additionally, set to `'left'` if you want them on the left, like in Ubuntu
        // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
        showWindowControls: '',
        // custom padding (CSS format, i.e.: `top right bottom left`)
        padding: '18px 18px',
        // the full list. if you're going to provide the full color palette,
        // including the 6 x 6 color cubes and the grayscale map, just provide
        // an array here instead of a color map object
        colors: {
            black: '#000000',
            red: '#C51E14',
            green: '#1DC121',
            yellow: '#C7C329',
            blue: '#0A2FC4',
            magenta: '#C839C5',
            cyan: '#20C5C6',
            white: '#C7C7C7',
            lightBlack: '#686868',
            lightRed: '#FD6F6B',
            lightGreen: '#67F86F',
            lightYellow: '#FFFA72',
            lightBlue: '#6A76FB',
            lightMagenta: '#FD7CFC',
            lightCyan: '#68FDFE',
            lightWhite: '#FFFFFF',
            limeGreen: '#32CD32',
            lightCoral: '#F08080',
        },
        // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
        // if left empty, your system's login shell will be used by default
        //
        // Windows
        // - Make sure to use a full path if the binary name doesn't work
        // - Remove `--login` in shellArgs
        //
        // Windows Subsystem for Linux (WSL) - previously Bash on Windows
        // - Example: `C:\\Windows\\System32\\wsl.exe`
        //
        // Git-bash on Windows
        // - Example: `C:\\Program Files\\Git\\bin\\bash.exe`
        //
        // PowerShell on Windows
        // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
        //
        // Cygwin
        // - Example: `C:\\cygwin64\\bin\\bash.exe`
        shell: 'C:\\Program Files\\nu\\bin\\nu.exe',
        shellArgs: [],
        // by default `['--login']` will be used
        // for environment variables
        env: {},
        // Supported Options:
        //  1. 'SOUND' -> Enables the bell as a sound
        //  2. false: turns off the bell
        bell: 'SOUND',
        // An absolute file path to a sound file on the machine.
        // bellSoundURL: '/path/to/sound/file',
        // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
        copyOnSelect: true,
        // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
        defaultSSHApp: true,
        // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
        // selection is present (`true` by default on Windows and disables the context menu feature)
        quickEdit: false,
        // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
        // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
        // (inside tmux or vim with mouse mode enabled for example).
        macOptionSelectionMode: 'vertical',
        // Whether to use the WebGL renderer. Set it to false to use canvas-based
        // rendering (slower, but supports transparent backgrounds)
        webGLRenderer: false,
        // keypress required for weblink activation: [ctrl|alt|meta|shift]
        // todo: does not pick up config changes automatically, need to restart terminal :/
        webLinksActivationKey: 'ctrl',
        // if `false` (without backticks and without quotes), Hyper will use ligatures provided by some fonts
        disableLigatures: false,
        // set to true to disable auto updates
        disableAutoUpdates: false,
        // set to true to enable screen reading apps (like NVDA) to read the contents of the terminal
        screenReaderMode: false,
        // set to true to preserve working directory when creating splits or tabs
        preserveCWD: true,
        // for advanced config flags please refer to https://hyper.is/#cfg
    },

    paneNavigation: {
        debug: false,
        hotkeys: {
            navigation: {
                up: 'ctrl+alt+Up',
                down: 'ctrl+alt+Down',
                left: 'ctrl+alt+Left',
                right: 'ctrl+alt+Right'
            },
            jump_prefix: 'ctrl+alt', // completed with 1-9 digits
            permutation_modifier: 'shift', // Added to jump and navigation hotkeys for pane permutation
            maximize: 'meta+enter'
        },
        showIndicators: true, // Show pane number
        indicatorPrefix: '^⌥', // Will be completed with pane number
        indicatorStyle: { // Added to indicator <div>
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: '10px'
        },
        focusOnMouseHover: false,
        inactivePaneOpacity: 0.6 // Set to 1 to disable inactive panes dimming
    },

    // a list of plugins to fetch and install from npm
    // format: [@org/]project[#version]
    // examples:
    //   `hyperpower`
    //   `@company/project`
    //   `project#1.0.1`
    plugins: [
        // "hyperterm-paste",
        // "hyperterm-visor",
        // "hyperterm-tabs",
        // "hyperlinks",
        // "hyper-startup",
        // "hyper-blink",
        // "hyper-tab-icons",
        // "hyper-dark-scrollbar",
        // "hyperterm-dibdabs",
        // "hyper-font-ligatures",
        // "hyper-one-dark",
        // "hyper-search",
        // "hyper-pane",
        // "hyper-active-tab",
        // "hyperline",
        // "hyper-opacity",
        // "hyper-drop-file",
        // "hyper-history",
        // "hyperterm-safepaste",
        // "hyper-search",
        // "hyper-dnd-tabs",
        // "hyper-match",
        // "hyperinator",
        // "hyperduck",
        "hyper-font-ligatures",
        "hyper-transparent"
    ],
    // activeTab: '🚀',
    // in development, you can create a directory under
    // `~/.hyper_plugins/local/` and include it here
    // to load it and avoid it being `npm install`ed
    localPlugins: [],
    // hyperTransparent: {
    //     backgroundColor: '#160119',
    //     opacity: 0.75,
    //     vibrancy: 'medium-light' // ['', 'dark', 'medium-light', 'ultra-dark']
    // },
    visor: {
        hotkey: 'Control+Shift+Alt',
        position: 'top', // or left, right, bottom
        width: 400, // Optional, defaults to half of viewable area for horizontal positions, 100% for vertical
        height: 800, // Optional, defaults to half of viewable area for vertical positions, 100% for horizontal
    },
};
//# sourceMappingURL=config-default.js.map