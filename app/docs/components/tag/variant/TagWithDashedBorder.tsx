"use client";
import { useState } from "react";
import { Tag } from "~/src";
import { CrownSimple, X } from "phosphor-react";

const TagWithDashedBorder = () => {
  const [dismiss, setDismiss] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleDismiss = (index: number) => {
    const updatedDismissStates = [...dismiss];
    updatedDismissStates[index] = true;
    setDismiss(updatedDismissStates);
  };

  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag
        color="error"
        dismiss={dismiss[0]}
        onDismiss={() => handleDismiss(0)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={dismiss[1]}
        onDismiss={() => handleDismiss(1)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={dismiss[2]}
        onDismiss={() => handleDismiss(2)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>

      <Tag
        color="warning"
        dismiss={dismiss[3]}
        onDismiss={() => handleDismiss(3)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={dismiss[4]}
        onDismiss={() => handleDismiss(4)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={dismiss[5]}
        onDismiss={() => handleDismiss(5)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        disabled={true}
        dismiss={dismiss[6]}
        onDismiss={() => handleDismiss(6)}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
    </div>
  );
};

const TagWithDashedBorderCode = `
"use client";
import { useState } from "react";
import { Tag } from "keep-react";
import { CrownSimple, X } from "phosphor-react";

export const TagComponent = () => {
  const [dismiss, setDismiss] = useState(false);
  const onDismiss = () => {
    setDismiss(!dismiss);
  };
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag
        disabled={true}
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="error"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="info"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="success"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="warning"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="teal"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
      <Tag
        color="purple"
        dismiss={dismiss}
        onDismiss={onDismiss}
        leftIcon={<CrownSimple size={20} />}
        dismissIcon={<X size={20} />}
        borderType="dashed"
      >
        Tag
      </Tag>
    </div>
  );
}
`;

export { TagWithDashedBorder, TagWithDashedBorderCode };
