<?php
if (!defined('DOKU_INC')) die();
class syntax_plugin_bureaucracytoolbar extends DokuWiki_Syntax_Plugin {
    public function getType() {
        return 'substition';
    }
    public function getPType() {
        return 'block';
    }
    public function getSort() {
        return 155;
    }
    public function connectTo($mode) {
        $this->Lexer->addSpecialPattern('<bureaucracytoolbar>', $mode, 'plugin_bureaucracytoolbar');
    }
    public function handle($match, $state, $pos, Doku_Handler $handler) {
        return array();
    }
    public function render($mode, Doku_Renderer $renderer, $data) {
        if ($mode !== 'xhtml') return false;
        $renderer->doc .= $this->getToolbarHtml();
        $this->addJavaScript();
        return true;
    }
    private function getToolbarHtml() {
        $html = '<div class="bureaucracytoolbar">';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'bold\')">Bold</button>';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'italic\')">Italic</button>';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'underscore\')">Underscore</button>';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'code\')">Code</button>';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'list\')">List Item</button>';
        $html .= '<button type="button" onclick="bureaucracyToolbar.addSyntax(\'link\')">Link</button>';// New button
        $html .= '</div>';
        $html .= '<style>
            .bureaucracytoolbar { margin-bottom: 10px; background-color: #f0f0f0; padding: 5px; border-radius: 4px; }
            .bureaucracytoolbar button { margin-right: 5px; padding: 5px 10px; cursor: pointer; }
        </style>';
        return $html;
    }
    private function addJavaScript() {
        $script = DOKU_BASE . 'lib/plugins/bureaucracytoolbar/script.js';
        global $INFO;
        if (!isset($INFO['bureaucracytoolbar_js_added'])) {
            $INFO['bureaucracytoolbar_js_added'] = true;
            echo '<script type="text/javascript" src="' . $script . '"></script>';
        }
    }
}
