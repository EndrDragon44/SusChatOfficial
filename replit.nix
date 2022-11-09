{ pkgs }: {
  deps = [
    pkgs.apacheHttpdPackages.php
    pkgs.sysvinit
    pkgs.root5
    pkgs.index-fm
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
		pkgs.php74
  ];
}