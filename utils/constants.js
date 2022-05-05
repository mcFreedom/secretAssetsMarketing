export const appUrl = (page = "", anchor = "") => {
  return `https://app.secassets.com/${page}${anchor}`;
};

export const webUrl = "https://www.secassets.com";

export const blurDataYacht = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAmoDBAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQMCBv/EABQQAQAAAAAAAAAAAAAAAAAAAAD/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A8sA24gAAAAAAAAAAAAAAAAAAAAACKgAAAAAAAAqAAAAIqAAIAAqAAAAgAoACAIAACKgoAAACAIAAoAAAAAAAoKigACAAAACooAAACgqKIAAAAAAAA1AVgAAAAAAAAAAAAAAAAAAAAABAAAAAAABQAEAAAARUAAQABUAAABABQAEAQABUAAAAAQQAUAAAAAAAAAAVBRQBAAAAAAFAAAUAAUAQAAAAABqArAAAAAAAAAAAAAAAAAAAAACAAAAAAAACiKgAAAAIAAAgAgoAAACACgAIAgACoAAAAiogACgAAAAAAAACgACgCAAAAAAKIoACgAAqKIAAAAAA1AVgAAAAAAAAAAAAAAAABAVAAAAAAAAAFAAQAAAAEAAQABRFQAABFQAAUBAAEAEFAAAAEBAAFAAAAAAAAAFAABUAUAQAAAAVAFAAAUAAUQEUAAAGogrCiAKIAogCiAKIAogCoAAAAAAAAAAAAAoAAgAAAAAgAACKAAgAAACAKAAIqIAACKgoAACAAIoAAAAIAoigAAAAAAAKKIoAAgAAAAqAKAAAoAAAAAA1AVzAAAAAAABQAAAAAAAAAAAAAAAAEAAAAAAAQAAEAAUQAAAAQAAUABAEAAVAAAAEBAAFAAEAAAAAFEUAAAAABQABQBAAAAAABUAUAABQAAABqArAAAAAAAAAAAAAAAAAAACAogAAAAAAACAqAAAgACgIAAAACACgACAgAAIqCgAAIAAigACAAAAAAAAAAqAKAAAAAoKgCgAACAAAAAAKIKKIAogDYQVhRAFEAUQBRAFEAUQBRAFQAAAAAAAAAAABAABAAFAAAQAAAABAAAFARAAABBQAAAEARQABAAAAAAAFABAAAABUAURQAFAABUAUAAAQAAAAAAAUAAagKwAAAAAAAAAAAAAAAAAACAKIAqAAAgACgAAACAAAAAAgAACgIAAgACiAAAAgIAAogAAAACgAAAAAAAAAgAAACiKAAoAAKgCgAAAACAAAAAANRBWVEAUQBRAFQBABQAQAAABQAAAAAAAAAAAAQAAAAABBVQAAAAQABAAFEAAABFQABFAQAAAAUAAAAAAAAAAAAAEAAAAFQUUAAAAAFEAUAAAAAAAGgCsAAAAAAAAAAAAAAAAAAAICiAKIAAAAAAAAgqoAAAAAAIgAAACiAAAACAAIoCAAAACgAAAAAAgCiAKIoAAAAAAAAgAAAoogCgAAAAAAAAAAA0AVgAAAAAAAAAAAAAAAAAAAAAAAABBVEAVAAAAAABAVAQAAAQVUAAAAQAARQEAAAAFAAAABAAAAAAAAAAAFEAURQAAAAABAAABQVAFEAURQAAAAdgKyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCCoAAAAAoIAAAAAICAAKCAAAAAoAACAAAAAAAAAAAAAAAAAAAKgCiKAAAAAAAAoACAAAAAANAFZAAAAAAAAAAAAAAAAAQFEAUQBRAFQAAEAAAAUBAUQAAAAAEAAEUAAQAAAABQAAQAAAAAAAAAAAAAAAAAAAAAAAAAVAFEAUAAAAAAAABQAB2IKyogCiAKIAoCAAAAAAAAAAAAAAACAogCiAKIAAAAAAACAACKAACAAAAAoAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCiAKIAogCiAOwFZAAAAAAAAAAAAAAAAAAAAAAAAAAAQFEAUQBUAUAQAABAAAAAAAUAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgKIAAAAAACgAAICoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAqAAAAAAAAAAAAKIAogCiCCiAKIAogCiAKIAAAAAAAACgAAAAICoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAogCiAKIAogCiAKAAAAAAAAAAAAAAAAAAAAAAAAIAogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAIoCCgIKAgoCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAACCiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAooIgoCCgIKAgoCCgIKAgqKAAAAAAAAAAAAAAAAoAAAAACCiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6AEAAAAAAAAAAAFAAAAAAAAAAAAEFQAAAAAAAAAAUAAAQQVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAKgAAAAAAAAAAAAAAAAAAAAAAAAAAigIKgAAAAAAAAoAAAAiiCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7AVkAAAAAAAAAFAAAAAAAAAAQUBAAAAAAAAQUBAAAAAAABQAABARUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2ArIAAAAAAAAAAAAAAAAAAAKAAAAgoCAAAAAAIoCAAAAAAACgCAACCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsBWQAAAAAAAAAAAAAAAAAAAAAABVAAEUBAEABQAQEVAAAAAAAABQBARQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2ArIAAAAAAAAAAAAAAAAAAAAAAAoACgAIKgAAACAACAAAAAAACgCAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7AVkAAAAAAAAAAAAAAAAAAAAAAAUABQABFQAAABAABAAAAAAABQBAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z`;

// made with https://blurred.dev/
